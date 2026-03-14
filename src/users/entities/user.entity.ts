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
  phone?: string;

  @Column({ nullable: true })
  hospitalId?: number;

  @Column({ nullable: true })
  department?: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // --- Methods ---
  getFullInfo(): string {
    return `${this.fullName} (${this.email})`;
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  isDoctor(): boolean {
    return this.role === 'DOCTOR';
  }

  isNurse(): boolean {
    return this.role === 'NURSE';
  }

  isHospital(): boolean {
    return this.role === 'HOSPITAL';
  }

  deactivate(): void {
    this.isActive = false;
  }

  activate(): void {
    this.isActive = true;
  }

  toJSON(): Record<string, any> {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      role: this.role,
    };
  }
}