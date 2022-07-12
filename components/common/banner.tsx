import Image from 'next/image';
import { memo } from 'react';

export const MainBanner = () => {
  return (
    <div
      className="
        bg-primary
        w-full flex flex-wrap justify-center items-center
        rounded-large px-6 lg:px-10 py-6 
      "
    >
      <div className="w-full md:w-1/2">
        <p className="text-white text-base lg:text-2xl">생각만 해도 어려운 기술면접, 😢</p>
        <h1
          className="
          text-white font-black text-4xl lg:text-5xl mg:leading-relaxed my-2"
        >
          <div className='relative mb-1'>
            <span>이제</span>
            <div className='relative w-[6.5ch] h-[1.4ch] text-center inline-block'>
              <div className='absolute inset-y-0 top-1 text-highlight bg-[#05479F] w-full h-full' />
              <span className='relative z-10'>원아우어</span>              
            </div>
            <span className='relative inline-block -ml-2.5'>로</span>
          </div>

          <div className="flex items-center">
            <div className='hidden lg:block h-[3px] w-[100px] bg-white mr-4' />
            <p>시작하세요!</p>
          </div>
        </h1>
        <p className="text-white text-base lg:text-lg">
          코 앞에 닥친 면접이 걱정된다면? <br />
          면접 1시간 전에 보는 가이드,
          <strong>‘원아우어’</strong>를 이용해보세요.
        </p>
      </div>
      <div className="relative h-[314px] w-[372px]">
        <Image src={'/assets/images/banner/main.png'} layout="fill" objectFit="contain" priority alt="banner" />
      </div>
    </div>
  );
};

export default memo(MainBanner);
