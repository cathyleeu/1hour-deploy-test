import Image from 'next/image';
import { memo } from 'react';

const SmallHeader = ({ content, src, className }: { content: string; src: string; className?: string }) => {
  return (
    <header className={`flex gap-[4px] items-center mb-[26px] ${className}`}>
      <Image src={src} alt="icon" width={28} height={28} />
      <h3 className="text-white text-[20px] font-bold">{content}</h3>
    </header>
  );
};

export default memo(SmallHeader);
