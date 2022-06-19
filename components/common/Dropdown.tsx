import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'

interface Props {
  categoryOptions: string[] | number[]
  size: number[]
  handleChange: (value: string) => void
}

function Dropdown({ categoryOptions, size, handleChange }: Props) {
  const [category, setCategory] = useState('')
  const handleDropdown = (e: SelectChangeEvent) => {
    setCategory(e.target.value)
    handleChange(e.target.value)
  }

  return (
    <div>
      <FormControl className={`bg-blue rounded-xl w-${size[0]} h-${size[1]}`}>
        <InputLabel id="dropdown-label" className={'text-white font-bold'}>
          카테고리
        </InputLabel>
        <Select
          value={category}
          onChange={handleDropdown}
          className={'text-white font-bold '}
        >
          {categoryOptions.map((data, id) => (
            <MenuItem value={data} key={id} className={`h-${size[1]}`}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Dropdown
