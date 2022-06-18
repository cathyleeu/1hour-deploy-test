import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import {CategoryParams} from '../../types'

interface Props {
  category:string;
}
const Category: NextPage<Props> = ({category}:Props) => {
  return (
    <div>
      <Head>
        <title>1Hour - {category}</title>
      </Head>
      메인 페이지 {category}
      {/* TODO: Category */}
    </div>
  )
}

export default Category

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category } = params as CategoryParams;

  return {
    props: {
      category
    },
  };
};
