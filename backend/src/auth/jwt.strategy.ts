// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common'; // Adicione UnauthorizedException aqui
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SECRET_KEY', // Substitua pelo seu segredo
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOneByUsername(payload.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Retorna o usuário encontrado, que será injetado no request
  }
}
