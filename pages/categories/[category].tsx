import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import CategoryBanner from '@components/category/banner';
import { categoryBanner, tagByCategory } from 'lib/utils';
import TagList from '@components/common/tag-list';
import { useMemo } from 'react';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const tagList = useMemo(() => tagByCategory[category as CategoryKey], [category]);

  return (
    <>
      <CategoryBanner data={categoryBanner[category as CategoryKey]} />
      <TagList value={tagList} /> 메인 페이지 {category}
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
