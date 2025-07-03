import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import { RENDER_REACT_KEY } from '../decorator/render-react.decorator';
import { ROUTE_NAME_KEY } from '../decorator/route-name.decorator';

@Injectable()
export class RenderReactInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const component = this.reflector.get(
      RENDER_REACT_KEY,
      context.getHandler(),
    );
    if (!component) {
      return next.handle();
    }

    const routeName = this.reflector.get(ROUTE_NAME_KEY, context.getHandler());
    const jsFile = routeName ? `/assets/${routeName}.js` : '/client.js';

    const ctx = context.switchToHttp();
    const res = ctx.getResponse();
    return next.handle().pipe(
      tap((props) => {
        const html = renderToString(React.createElement(component, props));
        const initialProps = JSON.stringify(props ?? {});
        res.send(`<!DOCTYPE html>
                    <html>
                      <head><title>SSR React-Nest</title></head>
                      <body>
                        <div id="root">${html}</div>
                        <script>
                          window.__initialState__ = ${initialProps};
                        </script>
                        <script type="module" src="${jsFile}"></script>
                      </body>
                    </html>`
                  );
      }),
    );
  }
}
