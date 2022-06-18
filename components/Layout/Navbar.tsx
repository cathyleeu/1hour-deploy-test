

interface Props {
  children?: React.ReactNode;
}

export default function Navbar({children}:Props) {
  return  (
    <div className='w-full h-12 border'>
      깃헙아바타
    </div>
  )
}