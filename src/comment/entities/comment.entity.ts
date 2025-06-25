import { AutoMap } from "@automapper/classes";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  content: string;

  @AutoMap()
  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @AutoMap()
  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}

