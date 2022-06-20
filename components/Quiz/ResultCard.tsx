import IconText from './IconText';

interface Props {
  className?: string;
  content: string;
  type: 'answer' | 'other';
}

const header = {
  answer: {
    src: "/assets/images/quiz/explanation.png",
    title: "Answer"
  },
  other: {
    src: "/assets/images/quiz/file.png",
    title: "Other Answers"
  }
}

const ResultCard = ({className, content, type}: Props) => {
  const {src, title} = header[type]
    
  return (
    <div className={`
      bg-gray w-full p-6 rounded-large ${className}
    `}>
      <IconText src={src} className='mb-5'>
        <p className='font-bold text-xl'>{title}</p>
      </IconText>
      <p>
        {content}
      </p>
    </div>
  )
}

export default ResultCard;