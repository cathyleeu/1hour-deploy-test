import IconText from './IconText';
import { TextArea } from '@components/Form';

interface Props {
  className?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  error: string;
  
}

const AnswerCard = ({className, value, onChange, error}: Props) => {
  return (
    <div className={`
      bg-gray w-full p-6 rounded-large border ${className}
      ${error ? 'border-error' : 'border-transparent'}
    `}>
      <IconText src="/assets/images/quiz/explanation.png" className='mb-5'>
        <p className='font-bold text-xl'>Answer</p>
      </IconText>
      <p className='my-4'>다음문제를 풀기 위해선 입력해주셔야합니다.</p>
      <TextArea
        placeholder="문제에 대한 답변을 입력해주세요." 
        className="w-full bg-transparent border-transparent" 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AnswerCard;