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

interface Category {
  id: string;
  name: string;
  desc: string;
  title: string;
}

interface Tag {
  id: string;
  name: string;
}
