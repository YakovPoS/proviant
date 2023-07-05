import{
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './Public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwtService: JwtService, private reflector: Reflector) {}

	async canActivate(context: ExecutionContext) {

		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass(),
		])
		if (isPublic) {
			return true
		}

		const request = context.switchToHttp().getRequest()
		const token = this.extractTokenFromHeader(request)

		if (!token) {
			throw new UnauthorizedException('Вы не вошли в систему')
		}

		try {
			const payload = await this.jwtService.verifyAsync(
				token,
				{
					secret: jwtConstants.secret,
				}
			)
			request['user'] = payload
		} catch {
			throw new UnauthorizedException('Вы не вошли в систему')
		}

		return true
	}

	private extractTokenFromHeader(request: Request) {
		const [type, token] = request.headers.authorization?.split(' ') ?? []
		return type === 'Bearer' ? token : undefined
	}
}
