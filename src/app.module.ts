import { Module } from '@nestjs/common';
import { HomeController } from './controller/home.controller';
import { ProductListController } from './controller/productList.controller';
import { HomeService } from './services/home.service';
import { ProductListService } from './services/productList.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RenderReactInterceptor } from './interceptor/render-react.interceptor';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/dist'),
      serveRoot: '/client/dist',
    }),
  ],
  controllers: [HomeController, ProductListController],
  providers: [
    HomeService,
    ProductListService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RenderReactInterceptor,
    },
  ],
})
export class AppModule { }
