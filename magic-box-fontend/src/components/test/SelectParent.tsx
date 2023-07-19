import { useState } from 'react'
import { Select } from './Select'

export const SelectParent = () => {
  const [selectValues, setSelectValues] = useState({
    select1: '',
    select2: '',
    select3: ''
  })
  const handleSelectChange = (v, e, name) => {
    console.log(v, e, name)
    setSelectValues((prevValues) => ({
      ...prevValues,
      [name]: v
    }))
  }
  return (
    <>
      <Select name="select1" change={handleSelectChange} value={selectValues.select1} />
      <Select name="select2" change={handleSelectChange} value={selectValues.select2} />
      <Select name="select3" change={handleSelectChange} value={selectValues.select3} />
    </>
  )
}
