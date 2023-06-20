import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async singIn(username: string, pass: string){
        const user = await this.userService.findOne(username)
        if(user?.password !== pass){
            throw new UnauthorizedException()
        }
        const {password, ...result} = user
        return result
    }
}
