import Button from '@components/common/button';
import Dropdown from '@components/common/Dropdown';
import { TextArea } from '@components/Form';
import TagList from '@components/common/tag-list';
import { tagByCategory } from 'lib/utils';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, MutableRefObject, FocusEvent, useMemo, useRef, useState } from 'react';
import SmallHeader from '@components/common/small-header';

export interface QuestionPostDataProps {
  title: string;
  content: string;
  category_id: string;
  tags: object[];
}

const WriteQuestion: NextPage = () => {
  const [category_id, setCategory_id] = useState<string>('frontend');
  const [tags, setTags] = useState<string[]>([]);

  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  const tagList = useMemo(() => tagByCategory[category_id as CategoryKey], [category_id]);

  const returnEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return e;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>, ref: MutableRefObject<HTMLTextAreaElement | null>) => {
    if (ref.current) ref.current.value = e.target.value;
    if (ref.current?.value.length === 0) {
      e.target.classList.add('focus:border-delete');
      e.target.classList.add('placeholder:text-delete');
    } else {
      e.target.classList.remove('focus:border-delete');
      e.target.classList.remove('placeholder:text-delete');
    }
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    e.target.classList.remove('border-delete', 'border-blue', 'placeholder:text-delete');
  };

  const cancleWrite = () => {};

  const postQuestion = () => {};

  return (
    <>
      <Head>
        <title>1Hour - Write Question</title>
      </Head>
      <div className="flex flex-col">
        <div className="guide--section">
          <div className="text-[35px] text-[#FFFFFF] font-bold mt-[50px]">
            <strong className="text-[#267FF5] mr-[4px]">{`#UserName`}</strong>님,
            <br /> 기술 면접을 보면서 받았던
            <br /> 질문과 답을 작성해주세요.
          </div>
          <div className="text-[14px] text-[#9e9898]">
            질문은 간략하게 작성해주세요. 페이지를 나가면 내용은 저장되지 않아요.
          </div>
        </div>

        <div className="write--section">
          {/* select category */}
          <Dropdown
            className="mt-[28px]"
            size={[144, 43]}
            categoryOptions={['javscript', 'next.js', 'react']}
            // handleChange={setReq}
          />
          {/* title */}
          <TextArea
            className="w-full h-[76px] bg-[#1B2128] rounded-[25px] mt-[21px] text-[24px] "
            placeholder="받으셨던 질문을 작성해주세요"
            ref={titleRef}
            onChange={(e) => {
              handleChange(returnEvent(e), titleRef);
            }}
            onBlur={handleBlur}
            wrap="off"
            required
          />
          {/* content */}
          <TextArea
            className="w-full h-[342px] bg-[#1B2128] rounded-[25px] mt-[22px] text-[16px]"
            placeholder="질문에 대해 답한 내용을 알려주세요"
            ref={contentRef}
            onChange={(e) => {
              handleChange(returnEvent(e), contentRef);
            }}
            onBlur={handleBlur}
          />
        </div>

        <div className="select--tags--section">
          <div className="select--guide">
            <SmallHeader className="mb-[6px]" content="태그 선택" src="/assets/icons/tag.png" />
            <p className="mb-[16px]">관련된 태그를 선택해주세요. (최소 1개)</p>
          </div>
          <div className="tags mb-[42px]">{category_id && <TagList value={tagList} getTagsList={setTags} />}</div>
        </div>
        <div className="button--section self-end mb-[228px]">
          <Button onClick={cancleWrite} className="w-[127px] h-[52px] text-[16px] font-bold bg-error">
            작성 취소
          </Button>
          <Button onClick={postQuestion} className="w-[127px] h-[52px] text-[16px] font-bold ml-[12px]">
            업로드하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default WriteQuestion;
