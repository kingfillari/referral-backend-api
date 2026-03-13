import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

@Entity('referrals')
export class Referral{

@PrimaryGeneratedColumn()
id:number

@Column()
patientId:number

@Column()
fromHospitalId:number

@Column()
toHospitalId:number

@Column()
doctorId:number

@Column()
reason:string

@Column({default:'NORMAL'})
priority:string

@Column({default:'PENDING'})
status:string

@Column({nullable:true})
notes:string

@CreateDateColumn()
createdAt:Date

@UpdateDateColumn()
updatedAt:Date

accept(){
this.status='ACCEPTED'
}

reject(){
this.status='REJECTED'
}

complete(){
this.status='COMPLETED'
}

setPriority(priority:string){
this.priority=priority
}

debug(){
console.log(this)
}

toJSON(){
return{
id:this.id,
patientId:this.patientId,
status:this.status
}
}

}
