import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return {
    attrs: {
      value,
      onChange
    },
    setValue
  }
}

export default useInput;