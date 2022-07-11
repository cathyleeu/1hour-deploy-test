import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <main className="w-screen h-screen">
      <section className="absolute w-full h-full pl-14 left-0 top-0 pt-[10%]">
        <Link href="/" passHref>
          <div className="relative w-[20%] h-[10%] cursor-pointer">
            <Image src="/assets/images/sidebar/logo.svg" alt="logo" layout="fill" />
          </div>
        </Link>
      </section>
      <section className="w-full h-full flex justify-center items-center flex-col">
        <article className="w-52 h-48 relative">
          <Image src={'/assets/images/banner/error.png'} alt="error" layout="fill" />
        </article>
        <article className="text-white flex flex-col items-center">
          <h1 className="font-bold text-2xl mt-[35px] mb-[17px]">페이지를 찾을 수 없어요!</h1>
          <p className="whitespace-pre opacity-60 text-center text-sm">{`지금 입력하신 주소의 페이지는 사라졌거나\n다른 페이지로 변경되었어요.\n주소를 다시 확인해주세요.`}</p>
        </article>
      </section>
    </main>
  );
}

ErrorPage.noLayout = true;
