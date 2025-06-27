import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { PERMISSION_KEY } from "src/decorators/permissions.decorator";

@Injectable()
export class PermissionsGuard implements CanActivate{
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const reqPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSION_KEY, [ context.getHandler(), context.getClass()] )

        if(!reqPermissions) return true;

        const {user} = context.switchToHttp().getRequest()
        const userPermissions = user.permissions?.map(p=>p.name) ?? [];

        return reqPermissions.some(p => userPermissions.includes(p))
    }

    
}