interface QnAType {
  title: string | undefined;
  content: string | undefined;
  categoryId: string;
  // tags: Array<object>;
}

interface QuestionValue {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  bookmarks: number;
  likes: number;
  description: string;
  tags?: Tag[];
}

interface QuestionPostDataProps {
  title: string;
  content: string;
  category_id: string;
  tags: object[];
}