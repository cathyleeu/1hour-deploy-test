import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import CategoryBanner from '@components/category/banner';
import TagList from '@components/common/tag-list';
import SmallHeader from '@components/common/small-header';
import QuestionCard from '@components/common/question-card';
import { responseAPI, oneHourUrl } from 'lib/api'
import { ParsedUrlQuery } from 'querystring'

interface Props {
  data: CategoryValue;
  tags: Tag[];
  questions: QuestionValue[];
}

const Category: NextPage<Props> = ({data, tags, questions}) => {
  return (
    <main className="w-full">
      <CategoryBanner data={data} />
      <section className="mt-[61px]">
        <SmallHeader content="태그로 찾아보기" src="/assets/icons/tag.png" />
      </section>
      <section>
        <TagList tags={tags} />
      </section>
      <section className="mt-[53px]">
        <SmallHeader content={`전체 (${questions.length})`} src="/assets/icons/pen.png" />
      </section>
      <section className="flex flex-col gap-7 mb-40">
        {questions.map((data, id) => (
          <QuestionCard key={id} {...data} />
        ))}
      </section>
    </main>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async() => {
  const categoryPage = ['frontend', 'backend', 'devops', 'mobile', 'datascience'];
  return {
    paths: categoryPage.map((v) => ({ params: { category: v } })),
    fallback: false,
  };
};

interface IPrams extends ParsedUrlQuery {
  category: CategoryKey
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as IPrams
  
  const [categoryResponse, categoriesError] = await responseAPI(oneHourUrl.GET_CATEGORY)
  const data = categoryResponse[category]
  const [questions, questionError] = await responseAPI(oneHourUrl.GET_QNA_BY_CATEGORY(data.id))
  const [tags, tagsError] = await responseAPI(oneHourUrl.GET_TAGS_BY_CATEGORY(data.id))

  if(!data || categoriesError) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      params,
      data,
      tags,
      questions
    },
  };
};
