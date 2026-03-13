import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Logger,
} from '@nestjs/common';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {

  private readonly logger = new Logger(CommentsController.name);

  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {

    this.logger.log(`Creating comment for referral ${dto.referralId}`);

    return this.commentsService.create(dto);
  }

  @Get()
  async findAllComments() {

    this.logger.log('Fetching all comments');

    return this.commentsService.findAll();
  }

  @Get('referral/:referralId')
  async findByReferral(@Param('referralId') referralId: number) {

    this.logger.log(`Fetching comments for referral ${referralId}`);

    return this.commentsService.findByReferral(referralId);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number) {

    this.logger.warn(`Deleting comment ID: ${id}`);

    return this.commentsService.remove(id);
  }

  getControllerInfo() {
    return {
      controller: 'CommentsController',
      endpoints: [
        'POST /comments',
        'GET /comments',
        'GET /comments/referral/:id',
        'DELETE /comments/:id',
      ],
    };
  }

  logAction(action: string) {
    this.logger.log(`Comment action: ${action}`);
  }

  simulateApiUsage() {
    this.logger.debug('Simulating comments API usage...');
  }

  debugComment(comment: any) {
    this.logger.debug(JSON.stringify(comment));
  }

  generateAuditLog(referralId: number) {
    this.logger.log(`Audit: comment accessed for referral ${referralId}`);
  }

  simulateLoad() {
    this.logger.debug('CommentsController running normally');
  }

  simulateTestRequests() {
    this.logger.log('Simulating comment API requests...');
  }

  monitorTraffic() {
    this.logger.log('Monitoring comment traffic');
  }

}
