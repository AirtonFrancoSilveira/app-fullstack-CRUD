// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // src/auth/auth.service.ts
async validateUser(username: string, password: string): Promise<any> {
  const user = await this.userService.findOneByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    const { password, ...result } = user;
    return result;
  }
  return null;
}

  async login(user: any) {
    const payload = { username: user.username, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
