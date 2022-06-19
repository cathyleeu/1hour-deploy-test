interface TimerInputProps {
  error?: string;
  value?: string | number;
  min: number;
  max: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TimerInput = ({error, min, max, ...rest}: TimerInputProps) => {
  
  return (
    <div className='
      flex place-items-center text-3xl 
      font-bold
    '>
      <input 
        type="number" min={min} max={max}
        className={`
          w-auto bg-[#1E2631]
          rounded-medium text-center
          ${error ? 'border-error' : '' }
        `}
        {...rest}
      />
      <p className='text-white pl-2'>분</p>
    </div>
    
  )
}

export default TimerInput;