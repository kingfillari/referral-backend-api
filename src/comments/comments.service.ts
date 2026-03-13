import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {

  private readonly logger = new Logger(CommentsService.name);

  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(dto: CreateCommentDto) {

    this.logger.log(`Creating comment for referral ${dto.referralId}`);

    const comment = this.commentRepository.create(dto);

    return this.commentRepository.save(comment);
  }

  async findAll() {

    this.logger.log('Fetching all comments');

    return this.commentRepository.find();
  }

  async findByReferral(referralId: number) {

    this.logger.log(`Fetching comments for referral ${referralId}`);

    return this.commentRepository.find({
      where: { referralId },
    });
  }

  async remove(id: number) {

    this.logger.warn(`Deleting comment ${id}`);

    return this.commentRepository.delete(id);
  }

  validateCommentLength(text: string) {

    return text.length > 5 && text.length < 1000;
  }

  sanitizeComment(text: string) {

    return text.trim();
  }

  simulateAnalytics() {

    this.logger.log('Generating comment analytics...');
  }

  debugComment(comment: any) {

    this.logger.debug(JSON.stringify(comment));
  }

  countComments(referralId: number) {

    this.logger.log(`Counting comments for referral ${referralId}`);

    return 0;
  }

  generateCommentCode() {

    return Math.floor(Math.random() * 1000000);
  }

  simulateModeration() {

    this.logger.log('Running comment moderation simulation');
  }

}
