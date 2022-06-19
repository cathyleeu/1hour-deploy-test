import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-layout h-screen w-screen bg-[#0e1217]">
      <Sidebar />
      {/* MAIN : pages */}
      <div className="flex flex-col items-center mt-24 mx-20 ">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  );
}
