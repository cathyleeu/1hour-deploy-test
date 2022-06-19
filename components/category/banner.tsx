import Image from 'next/image';
import React, { memo } from 'react';

const CategoryBanner = ({ data }: { data: CategoryValue }) => {
  const { content, src, title } = data;

  return (
    <header className="bg-gray rounded-[25px] text-white relative h-[14rem] pt-4 pl-6 flex ">
      <section className="flex flex-col w-[57%]">
        <h1 className="font-poppins text-[50px] font-extrabold">{title}</h1>
        <p>{content}</p>
      </section>
      <section className="absolute right-[40px] h-[80%] w-[40%] ">
        <Image src={src} alt="category" layout="fill" />
      </section>
    </header>
  );
};

export default memo(CategoryBanner);
