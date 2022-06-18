import type { ParsedUrlQuery } from 'querystring';

export interface CategoryParams extends ParsedUrlQuery {
  category: string;
}