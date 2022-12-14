import IconText from './IconText';

interface Props {
  question?: string;
  stage: number;
  maxStage: number;
  className?: string;
}

const QuestionCard = ({
  question,
  stage,
  maxStage,
  className
}: Props) => {
  return (
    <div className={`bg-gray-light w-full p-6 rounded-large ${className}`}>
      <div className='flex justify-between items-center mb-5'>
        <IconText src="/assets/images/quiz/question.png">
          <p className='font-bold text-xl'>Question</p>
        </IconText>
        <p className='text-sm'>{stage}/{maxStage}</p>
      </div>
      <p className='text-base md:text-2xl'>{question}</p>
    </div>
  )
}

export default QuestionCard;