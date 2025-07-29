import { tr } from "@faker-js/faker/.";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorators/roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
   constructor(private reflector: Reflector){} 

   async canActivate(context: ExecutionContext): Promise<boolean> {
       
    const reqRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()])

       if(!reqRoles) return true;

       const {user} = context.switchToHttp().getRequest();
       console.log(user, "this log from roles.guard.ts");
       
       const userRole = user.role?.name

       return reqRoles.includes(userRole);
   }
}