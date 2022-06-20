export enum CategoryType {
  FrontEnd = 1,
  BackEnd,
  DevOps,
  Mobile,
  DataScience,
}

interface Tag {
  id: number;
  name: string;
}
export interface QnAType {
  title: string;
  content: string;
  category_id: number;
  tags: Tag[];
}
