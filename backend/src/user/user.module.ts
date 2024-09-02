// src/modules/user/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from './entities/user.entity'; // Certifique-se de que a entidade User está sendo importada corretamente

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Configure o MongooseModule com o modelo User
  ],
  providers: [UserService],
  exports: [UserService], // Exporte UserService se outros módulos precisarem dele
})
export class UserModule {}
