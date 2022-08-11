import React, {
  ChangeEvent,
  MutableRefObject,
  FocusEvent,
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '@components/common/button';
import { TextArea } from '@components/Form';
import TagList from '@components/common/tag-list';
import SmallHeader from '@components/common/small-header';
import Select from '@components/common/Select';
import { categoryBanner, tagByCategory } from 'lib/utils';
import Modal from '@components/common/modal';
import { useRouter } from 'next/router';

const WriteQuestion: NextPage = () => {
  const router = useRouter();
  const [category_id, setCategory_id] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPost, setIsPost] = useState(false);
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  /*
    FIREBASE 연결하여 categories 데이터 불러옴
  */ 
  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch('/api/categories')
      const data =  await res.json();
      setCategoryData(data);
    } catch (err) {
      return err;
    }
  }, []);

  const categories = Object.keys(categoryBanner);
  const tagList = useMemo(() => tagByCategory[category_id as CategoryKey], [category_id]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory_id(e.target.value);
  };

  const returnEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return e;
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>, ref: MutableRefObject<HTMLTextAreaElement | null>) => {
      if (ref.current) ref.current.value = e.target.value;
      if (ref.current?.value.length === 0) {
        e.target.classList.add('focus:border-delete');
        e.target.classList.add('placeholder:text-delete');
      } else {
        e.target.classList.remove('focus:border-delete');
        e.target.classList.remove('placeholder:text-delete');
      }
    },
    []
  );

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    e.target.classList.remove('border-delete', 'border-blue', 'placeholder:text-delete');
  };

  const cancleWrite = () => {
    if (titleRef.current?.value.length || contentRef.current?.value.length) {
      setIsModalOpen(true);
    }
  };

  const postQuestion = () => {
    setIsPost(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
          <Select
            placeholder={'카테고리 선택'}
            className="w-[160px] h-[42px] mt-[28px] border-transparent outline-0 rounded-[12px] 
            text-white font-[16px] px-[17px] py[14px] appearance-none "
            style={{
              background: `var(--color-blue) url('/assets/images/sidebar/arrow.svg') no-repeat right 17px center`,
            }}
            onChange={handleSelect}
            options={categories}
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
            required
          />
        </div>

        <div className="select--tags--section mt-[21px]">
          <SmallHeader className="mb-[6px]" content="태그 선택" src="/assets/icons/tag.png" />

          {category_id && (
            <>
              <p className={`mb-[16px] text-${tags.length !== 0 ? 'white' : 'error'} `}>
                관련된 태그를 선택해주세요. (최소 1개)
              </p>
              <div className="tag--list mb-[42px]">
                <TagList value={tagList} setTags={setTags} />
              </div>
            </>
          )}
        </div>

        <div className="button--section self-end mb-[228px]">
          <Button
            className="w-[127px] h-[52px] text-[16px] 
          font-bold bg-delete"
            onClick={cancleWrite}
          >
            작성 취소
          </Button>
          <Button
            onClick={postQuestion}
            className="w-[127px] h-[52px] text-[16px] 
          font-bold ml-[12px] bg-blue"
          >
            업로드하기
          </Button>
        </div>

        {!isPost ? (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="w-full h-full border-white flex flex-col items-center">
              <p className="mt-[12px] mb-[16px]">페이지를 나가시면 작성된 내용이 저장되지 않아요.</p>
              <div className="button--group flex gap-[8px]">
                <Button className="w-[127px] h-[52px] text-[16px] font-bold bg-gray" onClick={closeModal}>
                  머무르기
                </Button>
                <Button className="w-[127px] h-[52px] text-[16px] font-bold bg-error" onClick={() => router.push('/')}>
                  나가기
                </Button>
              </div>
            </div>
          </Modal>
        ) : (
          <Modal isOpen={isPost} onClose={closeModal}>
            <div className="w-full h-full border-white flex flex-col items-center">
              <p className="mt-[12px] mb-[16px] text-center">
                질문 등록은 추후 구현될 예정입니다 😭
                <br />
                작성해주셔서 감사합니다!
              </p>
              <div className="button--group flex gap-[8px]">
                <Button
                  className="w-[127px] h-[52px] text-[16px] font-bold bg-gray-light"
                  onClick={() => router.push('/')}
                >
                  홈으로
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default WriteQuestion;
