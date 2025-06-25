// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const token = request.headers['authorization'].split(' ');

//     if (token[1] === 'GrantAccess') {
//       return true;
//     } else {
//       throw new UnauthorizedException('Invalid or missing token');
//     }
//   }
// }
