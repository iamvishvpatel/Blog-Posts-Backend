import { tr } from "@faker-js/faker/.";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorators/roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
   constructor(private reflector: Reflector){} 

   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       const reqRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()])

       if(!reqRoles) return true;

       const {user} = context.switchToHttp().getRequest();
       console.log(user, "this log from roles.guard.ts");
       
       const userRoles = user.roles?.map(role => role.name) ?? []

       return reqRoles.some(role => userRoles.includes(role));
   }
}