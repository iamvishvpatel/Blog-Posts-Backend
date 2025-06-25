import { AutoMap } from "@automapper/classes";
import { tr } from "@faker-js/faker/.";
import { Comment } from "src/comment/entities/comment.entity";
import { Post } from "src/post/entities/post.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class  User {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  username: string; 

  @AutoMap()
  @Column({nullable: true, unique: true})
  email: string;

  @AutoMap() 
  @Column({ select: true , nullable: true}) 
  password: string;

  @AutoMap()
  @Column({nullable: true})
  role: string;

  @AutoMap()
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @AutoMap()
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @AutoMap()
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
  
  @AutoMap()
  @CreateDateColumn()
  createdAt: Date;

  @AutoMap()
  @UpdateDateColumn()
  updatedAt: Date;
}

