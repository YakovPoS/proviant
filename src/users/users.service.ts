import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/roles.enum';

export type User = any

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
            roles: Role.Admin
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            roles: Role.Admin
        },
    ]

    async findOne(username: string){
        return this.users.find(user => user.username === username)
    }
}
