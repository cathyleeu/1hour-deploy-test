import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

import { useResponsiveContext } from '@components/Layout/ResponsiveContext'
import ArrowIcon from './arrow-icon';

interface category {
  name: string;
  params: string;
}
interface Props {
  src: string;
  title: string;
  list: category[];
}

const SideDropdown = ({ src, title, list }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<string>('');
  const { IsMobileScreen, setIsMenuOpen } = useResponsiveContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClick = (e: any) => {
    const target = e.target as Element;
    setSelectedList(target.innerHTML);
    if(IsMobileScreen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  const clickOutside = (e: any) => {
    if (isOpen && !dropdownRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className={'dropdown'}>
      <div className={'flex flex-col items-center'}>
        {/* button */}
        <button
          className={`flex items-center rounded-xl px-4 py-3.5 w-full h-12 bg-${
            isOpen ? 'blue' : 'gray'
          } text-base font-bold `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={src} alt="학습하기" width={23} height={22} />
          <p className={'mx-3 w-36 text-left text-white'}>{title}</p>
          <ArrowIcon color={'white'} width={13} height={6} />
        </button>

        {/* list */}
        {isOpen && (
          <ul className={'w-48 h-full'}>
            {list.map((data, id) => (
              <Link href={data.params} key={id}>
                <li
                  onClick={handleClick}
                  className={`text-${selectedList === data.name ? 'blue' : 'white'} pt-4 cursor-pointer`}
                >
                  {data.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideDropdown;
