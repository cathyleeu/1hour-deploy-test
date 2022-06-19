import Image from 'next/image';
import React, { memo } from 'react';

type Props = {};

const BookmarkBanner = (props: Props) => {
  return (
    <div className="w-full bg-[#FC8124] text-white rounded-[25px] px-[40px] py-[27px] relative">
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
      <div className="absolute right-5 top-5 w-[25%] h-[80%]">
        <Image src="/assets/images/banner/bookmark.png" alt="banner" layout="fill" />
      </div>
    </div>
  );
};

export default memo(BookmarkBanner);
