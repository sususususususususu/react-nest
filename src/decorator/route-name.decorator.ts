import { SetMetadata } from '@nestjs/common';

export const ROUTE_NAME_KEY = 'routeName';
export function RouteName(name: string) {
  return SetMetadata(ROUTE_NAME_KEY, name);
}
