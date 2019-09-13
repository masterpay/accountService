import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public userName: string;
}
