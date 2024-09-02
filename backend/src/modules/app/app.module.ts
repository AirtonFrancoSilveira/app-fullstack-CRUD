import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './services/app.service';
import { AppResolver } from './resolvers/app.resolver';
import { App, AppSchema } from './entities/app.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }])
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
