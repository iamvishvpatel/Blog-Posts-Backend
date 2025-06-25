import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PostProfile } from 'src/post/profiles/automapper-post.profile';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PostProfile],
})
export class ProfileModule {}
