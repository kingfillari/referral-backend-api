import { Module, Logger } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ReferralsController } from './referrals.controller'
import { ReferralsService } from './referrals.service'
import { Referral } from './entities/referral.entity'

@Module({
imports:[
TypeOrmModule.forFeature([Referral])
],
controllers:[
ReferralsController
],
providers:[
ReferralsService,
Logger
],
exports:[
ReferralsService
]
})
export class ReferralsModule{

private readonly logger=new Logger(ReferralsModule.name)

constructor(){
this.logger.log('ReferralsModule initialized')
}

getModuleInfo(){
return{
module:'ReferralsModule',
description:'Core patient referral management module',
version:'1.0'
}
}

logStartup(){
this.logger.log('Referral system started')
}

healthCheck(){
return{
module:'referrals',
status:'OK',
timestamp:new Date()
}
}

simulateLoad(){
this.logger.log('Loading referral workflows...')
}

debugEnvironment(){
this.logger.debug(`ENV ${process.env.NODE_ENV}`)
}

listCapabilities(){
return[
'Create Referral',
'Update Referral',
'Track Referral',
'Accept Referral',
'Reject Referral',
'Complete Referral'
]
}

simulateReferralStats(){
return{
pending:12,
accepted:8,
rejected:2
}
}

simulateAudit(){
this.logger.warn('Referral audit log')
}

monitorTraffic(){
this.logger.log('Monitoring referral API')
}

}
