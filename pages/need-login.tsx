import { useAuth } from '@components/auth/AuthProvide';
import Button from '@components/common/button';
import { GetServerSideProps } from 'next';
import { verifyIdToken } from '@/firebase/admin'
import Image from 'next/image';
import nookies from 'nookies'


export default function LoginPage() {
  const { login } = useAuth();

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
      <Button onClick={login} className="bg-blue px-[20px] py-[15px] font-medium">
        GitHub로 로그인하기
      </Button>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = await verifyIdToken(cookies.token);
  
  if (token) {
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
