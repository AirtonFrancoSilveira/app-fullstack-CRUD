// src/modules/app/services/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App, NotaBimestre } from '../entities/app.entity';
import { CreateAppDto } from '../dto/create-app.dto';
import { UpdateAppDto } from '../dto/update-app.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) private appModel: Model<App>) {}

  private determineTurma(age: number): string {
    const turmaMap = [
      { min: 5, max: 7, turma: 'Kids 1' },
      { min: 8, max: 12, turma: 'Kids 2' },
      { min: 13, max: 15, turma: 'Teens' },
      { min: 16, max: 17, turma: 'Teens 2' },
      { min: 18, max: Infinity, turma: 'Adults' }
    ];

    const turma = turmaMap.find(range => age >= range.min && age <= range.max);
    return turma ? turma.turma : 'Unknown';
  }

  private calculateMedia(notas: NotaBimestre[]): number {
    if (notas.length === 0) return 0;
    const total = notas.reduce((acc, curr) => acc + curr.nota, 0);
    return total / notas.length;
  }

  private determineStatus(media: number): string {
    if (media >= 0 && media <= 5) {
      return 'Reprovado';
    } else if (media > 5 && media <= 7) {
      return 'Recuperação';
    } else if (media > 7 && media <= 10) {
      return 'Aprovado';
    } else {
      return 'Nota inválida';
    }
  }

  async create(createAppDto: CreateAppDto): Promise<App> {
    const turma = this.determineTurma(createAppDto.age);
    const media = this.calculateMedia(createAppDto.notasPorBimestre || []);
    const status = this.determineStatus(media);

    const createdApp = new this.appModel({ 
      ...createAppDto, 
      turma, 
      media, 
      status 
    });
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
    const media = this.calculateMedia(updateAppDto.notasPorBimestre || []);
    const status = this.determineStatus(media);

    return this.appModel.findByIdAndUpdate(
      id, 
      { ...updateAppDto, turma, media, status }, 
      { new: true }
    ).exec();
  }

  async remove(id: string): Promise<App> {
    return this.appModel.findByIdAndDelete(id).exec();
  }
}
