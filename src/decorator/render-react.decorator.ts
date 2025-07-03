import { SetMetadata } from '@nestjs/common';

export const RENDER_REACT_KEY = 'render_react_component';

export function RenderReact(component: any) {
  return SetMetadata(RENDER_REACT_KEY, component);
} 