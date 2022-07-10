import Image from 'next/image';
import React, { memo } from 'react';

type Props = {
  name: string;
};

const BookmarkBanner = ({ name }: Props) => {
  return (
    <div
      className="
        bg-orange
        w-full flex flex-wrap justify-center md:justify-between items-center
        rounded-large px-6 lg:px-10 py-6 
      "
    >
      <section className="w-full md:w-1/2">
        <h1 className="font-bold text-3xl md:text-6xl">
          <span>{name}</span>
          <span className='text-white'>
            <br className='block md:hidden'/>의 
            <br className='hidden md:block'/> 북마크
          </span>
        </h1>
        <p className="mt-[16px]">
          {name}님이 저장해두신 북마크를 모두 모아봤어요.
          <br />
          복습을 시작해보세요.
        </p>
      </section>
      <section className="relative w-[183px] md:w-[244px]">
        <Image 
          src="/assets/images/banner/bookmark.png" 
          layout="responsive" 
          objectFit="contain" 
          priority 
          width={244}
          height={248}
          alt="banner" 
        />
      </section>
    </div>
  );
};

export default memo(BookmarkBanner);
