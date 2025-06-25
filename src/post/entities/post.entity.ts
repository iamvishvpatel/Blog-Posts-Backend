import { AutoMap } from "@automapper/classes";
import { Category } from "src/category/entities/category.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { Tag } from "src/tag/entities/tag.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  title: string;

  @ManyToOne(() => User, (user) => user.posts)
  @AutoMap()
  author: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  @AutoMap()
  comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.posts, { cascade: true })
  @AutoMap()
  @JoinTable()
  tags: Tag[];

  @ManyToOne(() => Category, (category) => category.posts)
  @AutoMap()
  category: Category;

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;
}

