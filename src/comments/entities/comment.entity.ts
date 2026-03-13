import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  referralId: number;

  @Column()
  userId: number;

  @Column()
  text: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }

  edit(newText: string) {
    this.text = newText;
  }

  markDeleted() {
    this.status = 'DELETED';
  }

  toJSON() {
    return {
      id: this.id,
      referralId: this.referralId,
      userId: this.userId,
      text: this.text,
      status: this.status,
    };
  }

  debug() {
    console.log(this);
  }

  wordCount() {
    return this.text.split(' ').length;
  }

  containsKeyword(keyword: string) {
    return this.text.includes(keyword);
  }

}
