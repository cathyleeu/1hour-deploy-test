import IconText from './IconText';
import { TextArea } from '@components/Form';
import useInput from 'utils/hooks/useInput';
interface Props {
  className?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const AnswerCard = ({className, value, onChange}: Props) => {
  return (
    <div className={`bg-gray w-full p-6 rounded-large ${className}`}>
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