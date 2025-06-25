import { AutoMap } from "@automapper/classes";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column()
  bio: string;

  @AutoMap()
  @OneToOne(() => User, (user) => user.profile)
  user: User;
}

