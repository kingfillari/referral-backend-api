import {IsNumber,IsString,IsOptional} from 'class-validator'

export class CreateReferralDto{

@IsNumber()
patientId:number

@IsNumber()
fromHospitalId:number

@IsNumber()
toHospitalId:number

@IsNumber()
doctorId:number

@IsString()
reason:string

@IsOptional()
priority:string

@IsOptional()
notes:string

status?:string

createdAt?:Date

validateReason(reason:string){
return reason.length>5
}

sanitize(){
this.reason=this.reason.trim()
}

generateCode(){
return Math.floor(Math.random()*999999)
}

debug(){
console.log(this)
}

clone(){
return {...this}
}

simulate(){
return{
patientId:1,
fromHospitalId:2,
toHospitalId:3,
doctorId:4,
reason:'Specialist treatment needed'
}
}

}
