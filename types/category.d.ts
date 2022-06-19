type CategoryKey = 'frontend' | 'backend' | 'devops' | 'mobile' | 'datascience';

type CategoryValue = {
  title: string;
  content: string;
  src: string;
};

type CategoryHeader = {
  [key in CategoryKey]: CategoryValue;
};
