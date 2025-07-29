import { AutoMap } from "@automapper/classes";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  content: string;

  @AutoMap()
  @Column()
  userId: number;

  @AutoMap()
  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({
    name:'userId', 
    referencedColumnName:'id',
    foreignKeyConstraintName:'userId'
  })
  user: User;

  @AutoMap()
  @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({
    name:'postId',
    referencedColumnName:'id',
    foreignKeyConstraintName:'postId'
  })
  post: Post;

  @AutoMap()
  @Column()
  postId:number;

}

