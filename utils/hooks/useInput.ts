import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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