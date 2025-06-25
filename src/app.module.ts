import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { Profile } from './profile/entities/profile.entity';
import { Tag } from './tag/entities/tag.entity';
import { Category } from './category/entities/category.entity';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { Comment } from './comment/entities/comment.entity';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { RegisterService } from './auth/services/register.service';
import { LoginService } from './auth/services/login.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [User, Profile, Post, Comment, Tag, Category],
        autoLoadEntities: true,
        synchronize: false,
        logging:true,
      }),
    }),
    TypeOrmModule.forFeature([User, Profile, Post, Comment, Tag, Category]),
    AutomapperModule.forRoot({
            strategyInitializer: classes(),
        }),
        AuthModule,

    UserModule,
    ProfileModule,
    PostModule,
    CommentModule,
    TagModule,
    CategoryModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        },
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, RegisterService, LoginService, JwtService],
})
export class AppModule {}
