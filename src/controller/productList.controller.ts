import { Controller, Get } from '@nestjs/common';
import { RenderReact } from '../decorator/render-react.decorator';
import ProductListEntry from '../page/productList/productList.view';
import { PageAlias } from 'src/route/page-alias';
import { RouteName } from 'src/decorator/route-name.decorator';


@Controller()
export class ProductListController {
  @Get(PageAlias.ProductList.route)
  @RouteName(PageAlias.ProductList.name)
  @RenderReact(ProductListEntry)
  home() {
    console.log('ProductList 控制器被调用');
    return {
      title: 'ProductList',
      description: 'ProductList page',
    };
  }
}
