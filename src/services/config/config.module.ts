import { Global, Module } from '@nestjs/common';
import { ConfigModule as ConfModule} from '@nestjs/config'
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [ConfModule.forRoot()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
