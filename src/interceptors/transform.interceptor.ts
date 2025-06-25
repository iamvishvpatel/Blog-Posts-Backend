import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class TransformIntercepter<T> implements NestInterceptor<T, {data: T; success: boolean}>{
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<{ data: T; success: boolean; }> | Promise<Observable<{ data: T; success: boolean; }>> {
        console.log('⏱️ Before handler...');
        return next.handle().pipe(map(data => ({success: true, data})));
    }
}