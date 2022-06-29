import Image from 'next/image';
import React, { memo } from 'react';

const CategoryBanner = ({ data }: { data: CategoryValue }) => {
  const { content, src, title } = data;

  return (
    <header className="
      bg-gray 
      w-full flex flex-wrap justify-center items-center
      rounded-large px-6 lg:px-10 py-6 
    ">
      <section className="w-full md:w-1/2">
        <h1 className="font-poppins text-[50px] text-white font-extrabold">{title}</h1>
        <p>{content}</p>
      </section>
      <section className="relative w-[350px] h-[254px]">
        <Image src={src} layout="fill" objectFit="contain" priority alt="category" />
      </section>
    </header>
  );
};

export default memo(CategoryBanner);
