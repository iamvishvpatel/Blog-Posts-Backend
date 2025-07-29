import { AutoMap } from '@automapper/classes';
import { Category } from 'src/category/entities/category.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  title: string;

  @Column({ type: 'text', nullable: true })
  @AutoMap()
  content: string

  @Column()
  @AutoMap()
  authorId: number;

  @ManyToOne(() => User, (user) => user.posts)
  @AutoMap()
  @JoinColumn({name: 'authorId'})
  author: User;

  @OneToMany(() => Comment, (comment) => comment.post, { cascade: true })
  @AutoMap()
  comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.posts, { cascade: true })
  @AutoMap()
  @JoinTable()
  tags: Tag[];

  @AutoMap()
  @Column()
  categoryId: number

  @ManyToOne(() => Category, (category) => category.posts)
  @AutoMap()
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedById' })
  updatedBy?: User;

  @Column({ nullable: true })
  updatedById?: number;
}
