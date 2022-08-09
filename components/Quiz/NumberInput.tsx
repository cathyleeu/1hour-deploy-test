import { PropsWithChildren } from 'react'

interface NumberInputProps {
  error?: string;
  value?: string | number;
  min: number;
  max: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const NumberInput = ({ 
  min,
  max,
  error,
  children,
  ...rest
}: PropsWithChildren<NumberInputProps>) => {
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
      {children}
    </div>
  )
}

export default NumberInput;