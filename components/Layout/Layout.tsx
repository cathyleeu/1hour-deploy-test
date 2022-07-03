import Sidebar from './Sidebar';
import Header from './Header';
import Container from './Container';
import { useResizeObserver } from 'lib/hooks';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [ref] = useResizeObserver();
  // const { isLogin } = useLogin();

  return (
    <div ref={ref} className="min-h-screen h-full w-screen">
      <Sidebar />
      <div className="w-full lg:w-[calc(100%-300px)] lg:ml-[300px] h-screen overflow-y-scroll">
        <Container tag="main" className="py-8">
          <Header />
          {children}
        </Container>
        {/* MAIN : pages */}
        {/* <div className="flex flex-col items-center mt-24 mx-20 ">
        <nav onClick={() => console.log('nav')} className="w-full justify-self-end mb-10">
          {isLogin ? <Avatar /> : <h3>로그인</h3>}
        </nav>
        {children}
      */}
      </div>
    </div>
  );
}
