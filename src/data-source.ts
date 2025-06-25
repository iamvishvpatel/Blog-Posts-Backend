import { join } from "path";
import { DataSource } from "typeorm";
import { User } from "./user/entities/user.entity";
import { Profile } from "./profile/entities/profile.entity";
import { Post } from "./post/entities/post.entity";
import { Tag } from "./tag/entities/tag.entity";
import { Category } from "./category/entities/category.entity";
import { Comment } from "./comment/entities/comment.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'vishvPatel',
    password: '@Abc@321@cba@321@',
    database: 'Task-5-Seeder',
    synchronize: false,
    entities: [User, Profile, Post, Comment, Tag, Category],
    migrations: ['src/migrations/*.ts'],
})