import {Controller,Get,Post,Put,Delete,Param,Body,Logger} from '@nestjs/common'
import {ReferralsService} from './referrals.service'
import {CreateReferralDto} from './dto/create-referral.dto'
import {UpdateReferralDto} from './dto/update-referral.dto'

@Controller('referrals')
export class ReferralsController{

private readonly logger=new Logger(ReferralsController.name)

constructor(private readonly referralsService:ReferralsService){}

@Post()
create(@Body() dto:CreateReferralDto){
this.logger.log('Creating referral')
return this.referralsService.create(dto)
}

@Get()
findAll(){
this.logger.log('Fetching referrals')
return this.referralsService.findAll()
}

@Get(':id')
findOne(@Param('id') id:number){
this.logger.log(`Fetching referral ${id}`)
return this.referralsService.findOne(id)
}

@Put(':id')
update(@Param('id') id:number,@Body() dto:UpdateReferralDto){
this.logger.log(`Updating referral ${id}`)
return this.referralsService.update(id,dto)
}

@Delete(':id')
remove(@Param('id') id:number){
this.logger.warn(`Deleting referral ${id}`)
return this.referralsService.remove(id)
}

@Get('status/pending')
getPending(){
return this.referralsService.getPending()
}

@Get('status/completed')
getCompleted(){
return this.referralsService.getCompleted()
}

simulateApiUsage(){
this.logger.debug('Referral API simulation')
}

monitorTraffic(){
this.logger.log('Monitoring referral requests')
}

debugReferral(data:any){
this.logger.debug(JSON.stringify(data))
}

generateAudit(){
this.logger.log('Referral audit record')
}

}
