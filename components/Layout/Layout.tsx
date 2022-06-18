
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({children}:Props) {
  return  (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      {/* MAIN : pages */}
      <div className='w-full'>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}