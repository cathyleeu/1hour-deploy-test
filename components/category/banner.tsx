import Image from 'next/image';
import React, { memo } from 'react';

const CategoryBanner = ({ data }: { data: CategoryValue }) => {
  const { content, src, title } = data;

  return (
    <section className="
      bg-gray 
      w-full flex flex-wrap justify-center items-center
      rounded-large px-6 lg:px-10 py-6 
    ">
      <div className='w-full grid grid-cols-[1fr_auto] gap-2'>
        <h1 className="font-poppins text-4xl text-white font-extrabold md:text-[50px] md:col-start-1 md:self-end mt-4">{title}</h1>
        <p className='col-span-2 col-start-1 md:col-span-1 md:row-start-2'>{content}</p>
        <div className="relative w-[170px] h-[132px] row-start-1 col-start-2 md:w-[350px] md:h-[254px] md:row-span-2">
          <Image 
            src={src} 
            layout="responsive" 
            width={350}
            height={254}
            objectFit="contain" 
            priority 
            alt="category" 
          />
        </div>
      </div>
    </section>
  );
};

export default memo(CategoryBanner);
