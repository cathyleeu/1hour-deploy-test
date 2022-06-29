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
        <p className="text-white text-xl lg:text-2xl">생각만 해도 어려운 기술면접, 😢</p>
        <h1
          className="
          text-white font-black text-5xl leading-relaxed"
        >
          <p>이제 원아우어로</p>
          <p
            className="
            relative
            before:absolute
            before:content-[' ']
            before:border-[3px] before:border-white before:w-[100px] before:top-[50%]"
          >
            <span className="ml-[110px]">시작하세요!</span>
          </p>
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
