interface QnAType {
  title: string | undefined;
  content: string | undefined;
  category_id: string;
  tags: Array<object>;
}

interface QuestionPostDataProps {
  title: string;
  content: string;
  category_id: string;
  tags: object[];
}