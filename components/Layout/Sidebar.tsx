import SideDropdown from '@components/common/side-dropdown';
import Link from 'next/link';

{
  /* TODO: 스타일, select */
}

interface Category {
  name: string;
  params: string;
}
export default function Sidebar({}) {
  const categories: Category[] = [
    { name: '프론트엔드', params: '/categories/frontend' },
    { name: '서버/백엔드', params: '/categories/backend' },
    { name: 'Mobile', params: '/categories/mobile' },
    { name: 'Data Science', params: '/categories/datascience' },
    { name: '데브옵스', params: '/categories/devops' },
  ];
  const reviewCategories: Category[] = [
    { name: '북마크', params: '/bookmark' },
    { name: '연습문제 풀기', params: '/dev-quiz' },
  ];

  return (
    <div className="flex flex-col items-center h-full bg-[#0B0F13] text-white">
      {/* 로고 */}
      <div className="w-[244px] ml-[36px] mt-24 mb-[40px]">
        <Link href="/">
          <button className="w-[108px] h-[68px] bg-[url('/assets/images/sidebar/logo.svg')]" />
        </Link>
      </div>

      {/* 학습하기 */}
      <SideDropdown list={categories} src={'/assets/images/sidebar/book.svg'} title={'학습하기'} />

      {/* 복습하기 */}
      <SideDropdown list={reviewCategories} src={'/assets/images/sidebar/review.svg'} title={'복습하기'} />
    </div>
  );
}
