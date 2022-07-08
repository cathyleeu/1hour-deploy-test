import { useClickOutside, useLogin } from 'lib/hooks';
import Image from 'next/image';
import { memo, useState, MouseEvent } from 'react';
import styles from 'styles/avatar.module.scss';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => {
    setIsOpen(false);
  });
  const { authorize, logout } = useLogin();

  const handleTogglePopup = (e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-end" onClick={(e) => e.stopPropagation()}>
      <button
        className="grid place-items-center bg-blue w-[60px] h-[60px] rounded-full relative"
        onClick={(e) => handleTogglePopup(e)}
      >
        <Image src={authorize.user.image} alt="avatar" width={21} height={25} />
        {/* <Image src={`/assets/icons/avatar.svg`} alt="avatar" width={21} height={25} /> */}
      </button>
      {isOpen && (
        <section className={styles.arrow} ref={ref}>
          <div className={`${styles.box} ${styles.active} rounded-t-[10px]`}>
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
