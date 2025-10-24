import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

// TODO - add zod schema for env files
@Module({
  imports: [
    MongooseModule.forRootAsync({
      // forRootAsync makes usre these dependencies are loaded before this module loads
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService], // inject the services that are being used in the factory
    }),
  ],
})
export class DatabaseModule {}
