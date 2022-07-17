import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useClickOutside } from 'lib/hooks';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const Portal = dynamic(() => import('./portal'), { ssr: false });

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  style?: CSSProperties;
}

const Modal = ({ children, isOpen, onClose, className, style }: Props) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) {
      onClose();
    }
  });

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className="fixed inset-0 z-40 bg-transparent" />
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
           bg-black border-blue border-2 rounded-large p-8 ${className}`}
        style={style}
        ref={ref}
        // bg랑 border 바뀐 모달 디자인으로 조금 수정했습니다!
      >
        <div className="w-full cursor-pointer" onClick={onClose}>
          <svg
            className="ml-auto"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9999 20.9999L1 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M21 1L1 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
