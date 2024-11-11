import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true, unique: true })
  mobile: string;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ nullable: true })
  image_avatar: string;

  @Column({ nullable: true })
  image_thumbnail: string;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  create_at: Date;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
