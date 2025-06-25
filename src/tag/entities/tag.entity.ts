
import { AutoMap } from "@automapper/classes";
import { Post } from "src/post/entities/post.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  name: string;

  @ManyToMany(() => Post, (post) => post.tags)
  @AutoMap()
  posts: Post[];
}

