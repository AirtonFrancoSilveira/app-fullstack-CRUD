// src/modules/app/resolvers/app.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards, UnauthorizedException } from '@nestjs/common';
import { RolesGuard } from '../../../guards/roles.guard';
import { Roles } from '../../../decorators/roles.decorator';
import { JwtAuthGuard } from '../../../guards/jwt-auth.guard';
import { CurrentUser } from '../../../decorators/current-user.decorator';
import { AppService } from '../services/app.service';
import { App } from '../entities/app.entity';
import { CreateAppDto } from '../dto/create-app.dto';
import { UpdateAppDto } from '../dto/update-app.dto';


@UseGuards(JwtAuthGuard, RolesGuard)
@Resolver(() => App)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation(() => App)
  @Roles('professor')
  async createApp(@Args('createAppInput') createAppDto: CreateAppDto): Promise<App> {
    return this.appService.create(createAppDto);
  }

  @Query(() => [App], { name: 'apps' })
  @Roles('professor')
  async findAll(): Promise<App[]> {
    return this.appService.findAll();
  }

  @Query(() => App, { name: 'app' })
  @Roles('aluno', 'professor')
  async findOne(@Args('id', { type: () => String }) id: string, @CurrentUser() user: any): Promise<App> {
    const app = await this.appService.findOne(id);
    if (user.role === 'aluno' && user.userId !== app._id.toString()) {
      throw new UnauthorizedException();
    }
    return app;
  }

  @Mutation(() => App)
  @Roles('professor')
  async updateApp(@Args('updateAppInput') updateAppDto: UpdateAppDto): Promise<App> {
    return this.appService.update(updateAppDto.id, updateAppDto);
  }

  @Mutation(() => App)
  @Roles('professor')
  async removeApp(@Args('id', { type: () => String }) id: string): Promise<App> {
    return this.appService.remove(id);
  }
}