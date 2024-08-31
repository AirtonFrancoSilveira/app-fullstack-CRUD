// src/modules/app/services/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from '../entities/app.entity';
import { CreateAppDto } from '../dto/create-app.dto';
import { UpdateAppDto } from '../dto/update-app.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) private appModel: Model<App>) {}

  private determineTurma(age: number): string {
    if (age >= 5 && age <= 7) {
      return 'Kids 1';
    } else if (age > 7 && age <= 12) {
      return 'Kids 2';
    } else if (age > 12 && age <= 15) {
      return 'Teens';
    } else if (age > 15 && age <= 17) {
      return 'Teens 2';
    } else if (age > 17) {
      return 'Adults';
    } else {
      return 'Unknown';
    }
  }

  async create(createAppDto: CreateAppDto): Promise<App> {
    const turma = this.determineTurma(createAppDto.age);
    const createdApp = new this.appModel({ ...createAppDto, turma });
    return createdApp.save();
  }

  async findAll(): Promise<App[]> {
    return this.appModel.find().exec();
  }

  async findOne(id: string): Promise<App> {
    return this.appModel.findById(id).exec();
  }

  async update(id: string, updateAppDto: UpdateAppDto): Promise<App> {
    const turma = this.determineTurma(updateAppDto.age);
    return this.appModel.findByIdAndUpdate(id, { ...updateAppDto, turma }, { new: true }).exec();
  }

  async remove(id: string): Promise<App> {
    return this.appModel.findByIdAndDelete(id).exec();
  }
}
