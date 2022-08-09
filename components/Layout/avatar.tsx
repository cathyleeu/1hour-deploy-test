import { useClickOutside, useLogin } from 'lib/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { memo, useState } from 'react';
import styles from 'styles/avatar.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '@components/auth/AuthProvide';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth(); 

  const ref = useClickOutside(() => {
    setIsOpen(false);
  });

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-end" onClick={(e) => e.stopPropagation()}>
      <button
        className="grid place-items-center w-[60px] h-[60px] rounded-full relative overflow-hidden"
        onClick={handleTogglePopup}
      >
        <Image src={user?.photoURL ?? ''} alt="avatar" layout="fill" objectFit="contain" />
      </button>
      {isOpen && (
        <section className={styles.arrow} ref={ref} onClick={handleTogglePopup}>
          <div
            className={`${styles.box} ${styles.active} rounded-t-[10px]`}
            onClick={() => router.push('/write-question')}
          >
            <span>글 작성하기</span>
          </div>
          <div className={`${styles.box} ${styles.active} rounded-b-[10px]`} onClick={logout}>
            <span>로그아웃</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default memo(Avatar);
