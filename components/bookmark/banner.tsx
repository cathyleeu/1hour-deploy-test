import Image from 'next/image';
import React, { memo } from 'react';

type Props = {};

const BookmarkBanner = (props: Props) => {
  return (
    <div className="
        bg-orange
        w-full flex flex-wrap justify-center items-center
        rounded-large px-6 lg:px-10 py-6 
      ">
      <section className="w-full md:w-1/2">
        <h1 className="font-bold text-[55px] leading-[60px]">
          <span className="text-black">{`#UserName`}</span>
          의
          <br />
          북마크
        </h1>
        <p className="mt-[16px]">
          {`#UserName`}님이 저장해두신 북마크를 모두 모아봤어요.
          <br />
          복습을 시작해보세요.
        </p>
      </section>
      <section className="relative w-[244px] h-[248px]">
        <Image src="/assets/images/banner/bookmark.png" layout="fill" objectFit="contain" priority alt="banner" />
      </section>
    </div>
  );
};

export default memo(BookmarkBanner);
