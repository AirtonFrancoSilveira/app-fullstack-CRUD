// app/resolvers/app.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppService } from '../services/app.service';
import { App } from '../entities/app.entity';
import { CreateAppDto } from '../dto/create-app.dto';
import { UpdateAppDto } from '../dto/update-app.dto';

@Resolver(() => App)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => App)
  createApp(@Args('createAppInput') createAppDto: CreateAppDto) {
    return this.appService.create(createAppDto);
  }

  @Query(() => [App], { name: 'apps' })
  findAll() {
    return this.appService.findAll();
  }

  @Query(() => App, { name: 'app' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.appService.findOne(id);
  }

  @Mutation(() => App)
  updateApp(@Args('updateAppInput') updateAppDto: UpdateAppDto) {
    return this.appService.update(updateAppDto.id, updateAppDto);
  }

  @Mutation(() => App)
  removeApp(@Args('id', { type: () => String }) id: string) {
    return this.appService.remove(id);
  }
}
