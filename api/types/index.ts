export enum CategoryId {
  FrontEnd = 1,
  BackEnd = 2,
  DevOps = 3,
  Mobile = 4,
  DataScience = 5,
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
  title: string;
  content: string;
  category_id: number;
  tags: Tag[];
}
