import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  constructor() {}

  getAppConfig() {
    console.log(process.env)
    return {
      env: process.env.NODE_ENV,
      port: process.env.APP_PORT,
    }
  }
}
