export enum CategoryId {
  frontend = 1,
  backend = 2,
  devops = 3,
  mobile = 4,
  datascience = 5,
}

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface QnAType {
  title: string | undefined;
  content: string | undefined;
  category_id: number;
  tags: Array<object>;
}
