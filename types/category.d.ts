type CategoryKey = 'frontend' | 'backend' | 'devops' | 'mobile' | 'datascience';  //| 'computerscience';

interface CategoryValue {
  id: string;
  name: string;
  desc: string;
  title: string;
  pathname: string;
  src: string;
};

type CategoryOptionType = {
  label: string;
  value: string;
}

type CategoryBanner = {
  [key in CategoryKey]: CategoryValue;
};

type TagValue = {
  [key in CategoryKey]: string[];
};

interface Tag {
  id: string;
  name: string;
}