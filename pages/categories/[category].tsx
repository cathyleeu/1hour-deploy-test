import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import {CategoryParams} from '../../types'
import Banner from '@components/Banner';
import bannerData from '../api/bannerData.js';

interface Props {
  category:string;
  banner: any;
}
const Category: NextPage<Props> = ({category, banner}:Props) => {
  return (
    <div>
      <Head>
        <title>1Hour - {category}</title>
      </Head>
      메인 페이지 {category}
      <Banner {...banner} />
      {/* TODO: Category */}
    </div>
  )
}

export default Category

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category } = params as CategoryParams;
  const banner = (bannerData as any)[category];

  return {
    props: {
      category,
      banner
    },
  };
};
