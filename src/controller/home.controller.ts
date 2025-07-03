import { Controller, Get } from '@nestjs/common';
import { RenderReact } from '../decorator/render-react.decorator';
import { RouteName } from '../decorator/route-name.decorator';
import HomeEntry from '../page/home/home.view';
import { PageAlias } from '../route/page-alias';

@Controller()
export class HomeController {
  @Get(PageAlias.Home.route)
  @RouteName(PageAlias.Home.name)
  @RenderReact(HomeEntry)
  home() {
    console.log('Home 控制器被调用');
    return {
      title: 'Home',
      description: 'Home page',
    };
  }
}
