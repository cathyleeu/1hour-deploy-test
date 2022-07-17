import React, { memo } from 'react';
import Image from 'next/image';
import { Logo } from '@components/common/Icon';
import Modal from '@components/common/modal';
import { useLogin } from 'lib/hooks';

type Props = {
  isOpenLogin: boolean;
  toggleOpenLogin: () => void;
};

const LoginModal = ({ isOpenLogin, toggleOpenLogin }: Props) => {
  const { login } = useLogin();

  return (
    <>
      {isOpenLogin && <div className="fixed inset-0 z-50 bg-background" />}
      <Modal
        isOpen={isOpenLogin}
        onClose={toggleOpenLogin}
        className="border-none"
        style={{ background: 'var(--color-gray)' }}
      >
        <div className="text-white text-base grid place-items-center gap-5">
          <Logo className="h-20" />
          <h1 className="text-2xl font-bold">원아우어에 오신걸 환영해요!</h1>
          <h4>로그인하고 관심있는 기술면접을 북마크하고 연습해보세요.</h4>
          <button onClick={login} className="bg-blue p-[13px] rounded-[12px] flex justify-center items-center gap-2">
            <Image src={'/assets/icons/github.svg'} width={24} height={24} alt="icon" />
            <span className="font-medium">GitHub로 로그인</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default memo(LoginModal);
