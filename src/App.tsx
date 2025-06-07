import { useState } from 'react'
import './App.scss'
import { Button } from './controls/Button'
import { Input } from './controls/Input'
import { Select } from './controls/Select'
import type { IOption } from './shared/types'
import { Checkbox } from './controls/Checkbox';
import { Range } from './controls/Range'
import { Textarea } from './controls/Textarea'
import { UsernameInput } from './components/Username'

function App() {
  const [selectedOption, setSelectedOption] = useState<string>('null')  
  const [value, setValue] = useState('');
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

  const ontextAreaChange = (event: any) => {
    console.log(event.target.value);
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
      <Range label="Range" onChange={onAgeChange}/>
      <br/>
      <Textarea label="Textarea" value='' onChange={ontextAreaChange}/>
      <br/>
      <UsernameInput />
    </>
  )
}

export default App
