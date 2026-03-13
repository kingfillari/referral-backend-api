import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  hospitalId: number;

  @Column({ nullable: true })
  department: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  getFullInfo() {
    return `${this.fullName} (${this.email})`;
  }

  isAdmin() {
    return this.role === 'ADMIN';
  }

  isDoctor() {
    return this.role === 'DOCTOR';
  }

  isNurse() {
    return this.role === 'NURSE';
  }

  isHospital() {
    return this.role === 'HOSPITAL';
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }

  toJSON() {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      role: this.role,
    };
  }

}