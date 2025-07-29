import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PERMISSION_KEY } from "src/decorators/permissions.decorator";

@Injectable()
export class PermissionsGuard implements CanActivate{
    constructor(private reflector: Reflector) {}
    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const reqPermissions =  this.reflector.getAllAndOverride<string[]>(PERMISSION_KEY, [ context.getHandler(), context.getClass()] )

        if(!reqPermissions) return true;

        const {user} = context.switchToHttp().getRequest()
        const userPermissions = user.permissions?.map(p=>p.name) ?? [];

        console.log("Requested permissions:", reqPermissions);
    console.log("User permissions:", userPermissions);

        return userPermissions.includes(reqPermissions[0])

    }  
} 

