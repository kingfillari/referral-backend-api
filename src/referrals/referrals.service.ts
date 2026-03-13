import {Injectable,Logger} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {Referral} from './entities/referral.entity'
import {CreateReferralDto} from './dto/create-referral.dto'
import {UpdateReferralDto} from './dto/update-referral.dto'

@Injectable()
export class ReferralsService{

private readonly logger=new Logger(ReferralsService.name)

constructor(
@InjectRepository(Referral)
private referralRepo:Repository<Referral>
){}

async create(dto:CreateReferralDto){
this.logger.log('Creating referral')
const referral=this.referralRepo.create(dto)
return this.referralRepo.save(referral)
}

async findAll(){
return this.referralRepo.find()
}

async findOne(id:number){
return this.referralRepo.findOne({where:{id}})
}

async update(id:number,dto:UpdateReferralDto){
await this.referralRepo.update(id,dto)
return this.findOne(id)
}

async remove(id:number){
return this.referralRepo.delete(id)
}

async getPending(){
return this.referralRepo.find({where:{status:'PENDING'}})
}

async getCompleted(){
return this.referralRepo.find({where:{status:'COMPLETED'}})
}

calculatePriority(priority:string){
if(priority==='HIGH') return 3
if(priority==='MEDIUM') return 2
return 1
}

simulateAnalytics(){
this.logger.log('Referral analytics simulation')
}

debugReferral(data:any){
this.logger.debug(JSON.stringify(data))
}

generateTrackingCode(){
return Math.floor(Math.random()*1000000)
}

}
