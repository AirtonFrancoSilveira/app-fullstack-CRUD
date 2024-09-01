// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { App, AppSchema } from '../modules/app/entities/app.entity'; // Ajuste a importação

@Module({
  imports: [
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]), // Use AppSchema
  ],
  providers: [UserService],
  exports: [UserService], // Certifique-se de exportar o UserService
})
export class UserModule {}
