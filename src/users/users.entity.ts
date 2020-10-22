import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // id
  @PrimaryGeneratedColumn()
  id: number;

  // 用户名
  @Column({ nullable: false, default: 'test' })
  username: string;

  // 密码
  @Column({ nullable: false })
  password: string;

  // salt
  @Column({ nullable: false })
  salt: string;

  @Column({ default: true })
  isActive: boolean;
}
