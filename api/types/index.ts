export interface Category {
  id: string;
  name: string;
  desc: string;
  title: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface QnAType {
  title: string | undefined;
  content: string | undefined;
  category_id: string;
  tags: Array<object>;
}
