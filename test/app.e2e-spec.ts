import {Test,TestingModule} from '@nestjs/testing'
import {INestApplication} from '@nestjs/common'
import * as request from 'supertest'
import {AppModule} from '../src/app.module'

describe('AppController (e2e)',()=>{

let app:INestApplication

beforeAll(async()=>{
const moduleFixture:TestingModule=await Test.createTestingModule({
imports:[AppModule]
}).compile()

app=moduleFixture.createNestApplication()
await app.init()
})

it('/ (GET)',()=>{
return request(app.getHttpServer())
.get('/')
.expect(200)
})

it('referrals endpoint',()=>{
return request(app.getHttpServer())
.get('/referrals')
.expect(200)
})

it('patients endpoint',()=>{
return request(app.getHttpServer())
.get('/patients')
.expect(200)
})

it('hospitals endpoint',()=>{
return request(app.getHttpServer())
.get('/hospitals')
.expect(200)
})

})
