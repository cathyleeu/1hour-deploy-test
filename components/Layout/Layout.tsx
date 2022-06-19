import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-layout h-screen w-screen bg-grey">
      <Sidebar />
      {/* MAIN : pages */}
      <div className="flex flex-col items-center bg-grey-light mt-24 mx-20 ">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  )
}
