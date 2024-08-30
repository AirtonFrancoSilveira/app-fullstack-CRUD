// app/services/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from '../entities/app.entity';
import { CreateAppDto } from '../dto/create-app.dto';
import { UpdateAppDto } from '../dto/update-app.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) private appModel: Model<App>) {}

  async create(createAppDto: CreateAppDto): Promise<App> {
    const createdApp = new this.appModel(createAppDto);
    return createdApp.save();
  }

  async findAll(): Promise<App[]> {
    return this.appModel.find().exec();
  }

  async findOne(id: string): Promise<App> {
    return this.appModel.findById(id).exec();
  }

  async update(id: string, updateAppDto: UpdateAppDto): Promise<App> {
    return this.appModel.findByIdAndUpdate(id, updateAppDto, { new: true }).exec();
  }

  async remove(id: string): Promise<App> {
    return this.appModel.findByIdAndDelete(id).exec();
  }
}
