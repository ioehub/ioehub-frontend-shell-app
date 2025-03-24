declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    stroke?: string | number;
  }

  export type Icon = FC<IconProps>;

  export const Cpu: Icon;
  export const Wifi: Icon;
  export const Settings2: Icon;
  export const Home: Icon;
  export const Book: Icon;
  export const Search: Icon;
  export const Settings: Icon;
  export const User: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  // 기타 필요한 아이콘들 추가
}
