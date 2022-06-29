import type { ParsedUrlQuery } from 'querystring';

export interface CategoryParams extends ParsedUrlQuery {
  category: string;
}

export interface BaseProps {
  className?: string;
  children?: React.ReactNode[];
  handleClick?: React.MouseEventHandler<Element>;
}