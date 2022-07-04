export enum CategoryId {
  FrontEnd = 1,
  BackEnd,
  DevOps,
  Mobile,
  DataScience,
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
