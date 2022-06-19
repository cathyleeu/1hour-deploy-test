import { ConstructionOutlined } from '@mui/icons-material';
import Image from 'next/image';
 
interface Props {
  label?: string;
  title: string;
  desc: string;
  img: string;
}


export const MainBanner = () => {
  return (
    <div 
      className='
        w-screen h-screen
        max-w-[945px] max-h-[425px]
        flex flex-col md:flex-row 
        bg-primary  rounded-[25px]
        px-10 py-4
      items-center
      '
    >
      <div className='w-1/2'>
        <p className='text-white text-2xl'>생각만 해도 어려운 기술면접, 😢</p>
        <h1 className='
          text-white font-black text-5xl leading-relaxed'>
          <p>이제 원아우어로</p>
          <p className="
            relative
            before:absolute
            before:content-[' ']
            before:border-[3px] before:border-white before:w-[100px] before:top-[50%]">
              <span className='ml-[110px]'>시작하세요!</span>
          </p>
        </h1>
        <p className='text-white text-lg'>
          코 앞에 닥친 면접이 걱정된다면? <br />
          면접 1시간 전에 보는 가이드, 
          <strong>‘원아우어’</strong>를 이용해보세요.
        </p>
      </div>
      <div className='relative w-1/2 h-full'>
        <Image 
          src={'/assets/images/banner/main.png'}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}

export default function Banner({
  label,
  title,
  desc,
  img
}: Props) {
  return (
    <div className='
      w-full flex flex-col md:flex-row content-center
      bg-gray rounded-[25px]
      sm:max-h-[254px] max-w-[945px]
      px-10 py-4
    '>
      <div className='max-w-[500px]'>
        {label ? <p>{label}</p> : null}
        <h1 className='text-white font-black text-5xl mt-8 my-4'>{title}</h1>
        <p className='text-white'>{desc}</p>
      </div>
      <div className='-ml-2 relative w-[378px] h-[232px]'>
        <Image 
          src={img}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}