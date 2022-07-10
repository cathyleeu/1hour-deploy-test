import { Dispatch, SetStateAction, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

interface Props<T> {
  categoryOptions: string[] | number[];
  size: number[];
  handleChange?: Dispatch<SetStateAction<T | undefined>>;
  className?: string;
}

function Dropdown({ categoryOptions, size, handleChange, className }: Props) {
  const [category, setCategory] = useState('');
  const handleDropdown = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <FormControl className={`bg-blue rounded-xl w-[${size[0]}px] h-[${size[1]}px] ${className}`}>
        <InputLabel id="dropdown-label" className={'text-white font-bold'}>
          카테고리
        </InputLabel>
        <Select value={category} onChange={handleDropdown} className={'text-white font-bold '}>
          {categoryOptions.map((data: string | number, id: number) => (
            <MenuItem value={data} key={id} className={`h-[${size[1]}p]`}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
