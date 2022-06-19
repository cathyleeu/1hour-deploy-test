import { Card } from '@mui/material';
import { useQuestionCard } from 'lib/hooks';
import Image from 'next/image';
import React, { memo } from 'react';
import Bookmark from './bookmark';
import MiniTag from './mini-tag';

interface Props {
  id: number;
  tags: string[];
  title: string;
  description: string;
  isBookmark: boolean;
}

const QuestionCard = ({ description, isBookmark, tags, title, id }: Props) => {
  const { onToggleBookmark, onToggleShow, show } = useQuestionCard();

  return (
    <Card className="bg-gray px-[30px] py-[20px] w-full rounded-[25px]" sx={{}}>
      <section className="flex justify-between">
        <p className="text-white font-bold text-[24px]">{title}</p>
        <Bookmark isChecked={isBookmark} onClick={() => onToggleBookmark(id)} />
      </section>
      <section className="my-[14px] flex gap-[9px]">
        {tags.map((v, i) => (
          <MiniTag content={v} key={i} />
        ))}
      </section>
      <section className="relative">
        <p className={`text-white ease-in pb-[20px] ${!show ? 'h-[60px] overflow-hidden' : ''}`}>{description}</p>
        {!show && (
          <div
            className="absolute w-full h-full top-0 rotate-180"
            style={{
              background: 'linear-gradient(180deg, #1B2128 25.83%, rgba(27, 33, 40, 0) 123.33%)',
            }}
          />
        )}
      </section>
      <section className="border-t border-[#313B46] pt-[20px] flex align-middle justify-center gap-[7px]">
        <button className="text-white" onClick={onToggleShow}>
          자세히보기
        </button>
        <Image
          src="/assets/icons/down-arrow.svg"
          alt="arrow"
          width={17}
          height={8}
          className={`cursor-pointer ${show ? '' : 'rotate-180'}`}
        />
      </section>
    </Card>
  );
};

export default memo(QuestionCard);
