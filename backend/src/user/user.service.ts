// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from '../modules/app/entities/app.entity'; // Ajuste a importação

@Injectable()
export class UserService {
  constructor(@InjectModel(App.name) private userModel: Model<App>) {} // Altere para usar a entidade correta

  // Criação de um novo usuário (sem senha criptografada)
  async create(username: string, role: string): Promise<App> {
    const newUser = new this.userModel({
      username,
      role,
    });
    return newUser.save();
  }

  // Busca de um usuário pelo nome de usuário
  async findOneByUsername(name: string): Promise<App | undefined> {
    return this.userModel.findOne({ name }).exec(); // Use 'name' ou outro campo existente
  }  
}
