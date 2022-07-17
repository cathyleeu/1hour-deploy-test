import Image from 'next/image';
interface Props {
  src: string;
  children: React.ReactNode;
  className?: string;
}
const IconText = ({src, children, className}:Props) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className='w-[16px] h-[16px]'>
        <Image src={src} width={16} height={16} layout="fixed" />
      </div>
      <div className="ml-2">
        {children}
      </div>
    </div>
  )
}

export default IconText;