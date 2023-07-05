import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(username: string, pass: string){
        const user = await this.userService.findOne(username)
        if(user?.password !== pass){ // сохраняется в токен, только если нашлось совпадение с базой данных
            throw new UnauthorizedException()
        }
        const payload = {sub: user.userId , username: user.username , role: user.roles} // хранится Id и username

        return {
            access_token: this.jwtService.sign(payload) // возвращает токен
        }
    }
}
