import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Permission } from './permission.entity';
import { permission } from 'process';
import { User } from 'src/user/entities/user.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  name: string;

  @Column({ nullable: true })
  @AutoMap()
  description?: string;

  @OneToMany(() => User, (user) => user.role)
  @AutoMap()
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.roles, {
    cascade: true,
  })
  @JoinTable()
  @AutoMap()
  permissions: Permission[];

  @AutoMap()
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  createdAt!: Date;

  @AutoMap()
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  updatedAt!: Date;
}
 