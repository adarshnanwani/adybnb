import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({ imports: [NestConfigModule.forRoot()] }) // this reads evn vars in memory and any .env files
export class ConfigModule {}
