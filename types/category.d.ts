type CategoryKey = 'frontend' | 'backend' | 'devops' | 'mobile' | 'datascience';

type CategoryValue = {
  title: string;
  content: string;
  src: string;
};

type CategoryBanner = {
  [key in CategoryKey]: CategoryValue;
};

type TagValue = {
  [key in CategoryKey]: string[];
};
