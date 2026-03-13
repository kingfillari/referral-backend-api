import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('patients')
export class Patient {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  referredBy: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }

  isAdult() {
    return this.age >= 18;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.getFullName(),
      age: this.age,
      gender: this.gender,
    };
  }

  debug() {
    console.log(this);
  }

}