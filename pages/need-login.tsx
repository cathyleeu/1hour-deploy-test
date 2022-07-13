import Button from '@components/common/button';
import { useLogin } from 'lib/hooks';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Image from 'next/image';
import { authOptions } from './api/auth/[...nextauth]';

export default function LoginPage() {
  const { login } = useLogin();

  return (
    <main className="flex justify-center items-center flex-col gap-4 mt-20">
      <section className="w-3/5 h-52 scale-x-[-1]">
        <Image src="/assets/images/banner/bookmark.png" layout="fill" objectFit="contain" priority alt="banner" />
      </section>
      <h3 className="text-white text-lg text-center font-medium">
        북마크를 이용하시려면
        <br />
        로그인이 필요해요.
      </h3>
      <Button onClick={login} className="px-[20px] py-[15px] font-medium">
        GitHub로 로그인하기
      </Button>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await unstable_getServerSession(context.req, context.res, authOptions);

  if (user) {
    return {
      redirect: {
        destination: '/bookmark',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
