import { useEffect } from 'react';
import Link from 'next/link';

import SideDropdown from '@components/common/side-dropdown';
import { useResponsiveContext } from '@components/Layout/ResponsiveContext';
import { Close, Logo } from '@components/common/Icon';
import { useAuth } from '@components/auth/AuthProvide';

interface Category {
  name: string;
  params: string;
}
export default function Sidebar({}) {
  const { IsMobileScreen, isMenuOpen, setIsMenuOpen } = useResponsiveContext();
  const { user } = useAuth(); 
  const categories: Category[] = [
    { name: '프론트엔드', params: '/categories/frontend' },
    { name: '서버/백엔드', params: '/categories/backend' },
    { name: 'Mobile', params: '/categories/mobile' },
    { name: 'Data Science', params: '/categories/datascience' },
    { name: '데브옵스', params: '/categories/devops' },
  ];
  const reviewCategories: Category[] = [
    { name: '북마크', params: `/bookmark/${user?.uid}`},
    { name: '연습문제 풀기', params: '/dev-quiz' },
  ];

  const closeSidebar = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if(!IsMobileScreen && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [IsMobileScreen, isMenuOpen])
  
  return (
    <div className={
      `
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        absolute top-0 tansition duration-300
        w-[300px] h-screen py-8 px-7 bg-[#0B0F13] 
        grid auto-rows-max gap-4 z-50
      `
    }>
      {/* 로고 */}
      {IsMobileScreen
        ? (
          <div className="flex items-center mt-4 mb-12">
            <Close className="h-5 mr-4" handleClick={closeSidebar}/>
            <Logo className="h-8" />
          </div>
        )
        : (
          <div className='h-24 py-4 pl-4 mt-4'>
            <Link href="/" className="m-auto border border-white w-full">
              <a><Logo className="h-16" /></a>
            </Link>
          </div>
        )
      }
      
      {/* 학습하기 */}
      <SideDropdown list={categories} src={'/assets/images/sidebar/book.svg'} title={'학습하기'} />

      {/* 복습하기 */}
      <SideDropdown list={reviewCategories} src={'/assets/images/sidebar/review.svg'} title={'복습하기'} />
    </div>
  );
}
