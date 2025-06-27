import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './role.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  name: string;

  @Column({ nullable: true })
  @AutoMap()
  description?: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  @AutoMap()
  roles: Role;

  @AutoMap()
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  public createdAt!: Date;

  @AutoMap()
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  public updatedAt!: Date;
}
