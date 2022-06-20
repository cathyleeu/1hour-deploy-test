import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import CategoryBanner from '@components/category/banner';
import { categoryBanner, tagByCategory } from 'lib/utils';
import TagList from '@components/common/tag-list';
import { useMemo } from 'react';
import SmallHeader from '@components/common/small-header';
import QuestionCard from '@components/common/question-card';
import questions from '../../dummy/questions.json';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const tagList = useMemo(() => tagByCategory[category as CategoryKey], [category]);

  console.log(category);

  return (
    <main className="w-full">
      <CategoryBanner data={categoryBanner[category as CategoryKey]} />
      <section className="mt-[61px]">
        <SmallHeader content="태그로 찾아보기" src="/assets/icons/tag.png" />
      </section>
      <section>
        <TagList value={tagList} />
      </section>
      {/* TODO: fetch count data */}
      <section className="mt-[53px]">
        <SmallHeader content="전체(23)" src="/assets/icons/pen.png" />
      </section>
      {/* TODO: fetch list data */}
      <section className="flex flex-col gap-7 mb-40">
        {questions
          .filter((question) => question.category === category)
          .map((data, id) => (
            <QuestionCard key={id} {...data} />
          ))}
      </section>
    </main>
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
