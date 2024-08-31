// src/modules/app/resolvers/app.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppService } from '../services/app.service';
import { App } from '../entities/app.entity'; // Rota da entidade App
import { CreateAppDto } from '../dto/create-app.dto'; // Rota do DTO CreateAppDto

@Resolver(() => App)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => App) // O tipo de retorno aqui deve ser decorado com @ObjectType
  async createApp(@Args('createAppInput') createAppDto: CreateAppDto): Promise<App> {
    return this.appService.create(createAppDto);
  }

  @Query(() => [App], { name: 'apps' })
  async findAll() {
    return this.appService.findAll();
  }

  @Query(() => App, { name: 'app' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.appService.findOne(id);
  }

  @Mutation(() => App)
  async updateApp(@Args('updateAppInput') updateAppDto: UpdateAppDto): Promise<App> {
    return this.appService.update(updateAppDto.id, updateAppDto);
  }

  @Mutation(() => App)
  async removeApp(@Args('id', { type: () => String }) id: string): Promise<App> {
    return this.appService.remove(id);
  }
}