import { useAuth } from '@components/auth/AuthProvide';
import { Card } from '@mui/material';
import { useQuestionCard } from 'lib/hooks';
import React, { memo, useEffect, useState } from 'react';
import ArrowIcon from './arrow-icon';
import Bookmark from './bookmark';
import MiniTag from './mini-tag';

const QuestionCard = ({ description, tags = [], title, id }: QuestionValue) => {
  const { onToggleBookmark, onToggleShow, show, isBookmark } = useQuestionCard(id);
  const { user } = useAuth()

  return (
    <Card
      sx={{
        backgroundColor: 'var(--color-gray-light)',
        borderRadius: '25px',
        paddingX: '30px',
        paddingY: '20px',
        width: '100%',
      }}
    >
      <section className="flex justify-between">
        <p className="text-white font-bold text-[24px]">{title}</p>
        <Bookmark isChecked={isBookmark} onClick={() => onToggleBookmark(id, user!.uid)} />
      </section>
      <section className="my-[14px] flex gap-[9px]">
        {tags.map((tag, i) => (
          <MiniTag content={tag.name} key={tag.id} />
        ))}
      </section>
      <section className="relative">
        <p className={`text-white ease-in pb-[20px] ${!show ? 'h-[60px] overflow-hidden' : ''}`}>{description}</p>
        {!show && (
          <div
            className="absolute w-full h-full top-0 rotate-180"
            style={{
              background: 'linear-gradient(180deg, #2f3844 25.83%, rgba(27, 33, 40, 0) 123.33%)',
            }}
          />
        )}
      </section>
      <section
        className="border-t border-slate-300 pt-[20px] flex align-middle justify-center gap-[7px] cursor-pointer"
        onClick={onToggleShow}
      >
        <button className="text-white">자세히보기</button>
        <ArrowIcon color="white" width={17} height={8} isToggle={show} />
      </section>
    </Card>
  );
};

export default memo(QuestionCard);
