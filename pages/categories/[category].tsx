import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HeaderCard from '@components/category/header-card';
import { categoryHeader } from 'lib/utils';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <HeaderCard data={categoryHeader[category as CategoryKey]} />
      메인 페이지 {category}
      {/* TODO: Category */}
    </>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = () => {
  //TODO: check with category page
  const categoryPage = ['frontend', 'backend', 'devops', 'mobile', 'datascience'];
  return {
    paths: categoryPage.map((v) => ({ params: { category: v } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  //TODO: fetch data
  return {
    props: {
      params,
    },
  };
};
