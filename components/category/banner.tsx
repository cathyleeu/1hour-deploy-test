import Image from 'next/image';
import React, { memo } from 'react';

const CategoryBanner = ({ data }: { data: CategoryValue }) => {
  const { content, src, title } = data;

  return (
    <header className="bg-gray rounded-[25px] text-white relative h-[254px] flex justify-between items-center px-[50px] ">
      <section className="flex flex-col flex-1 ">
        <h1 className="font-poppins text-[50px] font-extrabold">{title}</h1>
        <p>{content}</p>
      </section>
      <section className="w-[350px] h-full">
        <Image src={src} width={350} height={254} alt="category" className="w-full" />
      </section>
    </header>
  );
};

export default memo(CategoryBanner);
