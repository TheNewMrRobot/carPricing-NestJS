import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    //run before going to request handler
    console.log('Running Before the request', context);

    return next.handle().pipe(
      map((data) => {
        console.log('Running after the Request', data);
      }),
    );
  }
}
