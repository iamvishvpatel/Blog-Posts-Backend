import { join } from "path";
import { DataSource } from "typeorm";
import { User } from "./user/entities/user.entity";
import { Profile } from "./profile/entities/profile.entity";
import { Post } from "./post/entities/post.entity";
import { Tag } from "./tag/entities/tag.entity";
import { Category } from "./category/entities/category.entity";
import { Comment } from "./comment/entities/comment.entity";
import { Role } from "./role/entities/role.entity";
import { Permission } from "./role/entities/permission.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [User, Profile, Post, Comment, Tag, Category, Role, Permission],
    migrations: ['src/migrations/*.ts'],
})