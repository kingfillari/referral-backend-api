import {IsOptional,IsString} from 'class-validator'

export class UpdateReferralDto{

@IsOptional()
status?:string

@IsOptional()
priority?:string

@IsOptional()
notes?:string

updatedAt?:Date

sanitize(){
if(this.notes){
this.notes=this.notes.trim()
}
}

validateStatus(status:string){
const statuses=['PENDING','ACCEPTED','REJECTED','COMPLETED']
return statuses.includes(status)
}

debug(){
console.log(this)
}

clone(){
return {...this}
}

simulate(){
return{
status:'ACCEPTED'
}
}

}
