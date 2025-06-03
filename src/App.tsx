import { useState } from 'react'
import './App.scss'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Select } from './components/Select'
import type { IOption } from './shared/types'
import { Checkbox } from './components/Checkbox';
import { Range } from './components/Range'

function App() {
  const [selectedOption, setSelectedOption] = useState<string>('null')  
  const onButtonClick = () => {
    console.log('Button clicked!')
  }
  const onEmailChange = () => {
    console.log('Button clicked!')
  }

  const onAgeChange = (event: any) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value)
  }
  const onCheckChange = (event: any) => {
    console.log(event.target.checked);
  }

  const options: IOption[] = [ {label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}]

  return (
    <>
      <Button label='Primary' className='btn-primary' type='button'  onClick={onButtonClick}/>
      <br />
      <Input label='Email address' type='email' value='' onChange={onEmailChange}/>
      <br />
      <Select label='Age' options={options} onChange={onAgeChange} selectedValue={selectedOption}/>
      <br />
      <Checkbox label='Checkbox' value='' onChange={onCheckChange}/>
      <br/>
      <Range label="Range" onChange={onCheckChange}/>
    </>
  )
}

export default App
