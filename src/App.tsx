import './App.scss'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  const onButtonClick = () => {
    console.log('Button clicked!')
  }
  const onEmailChange = () => {
    console.log('Button clicked!')
  }

  return (
    <>
      <Button label='Primary' className='btn-primary' type='button'  onClick={onButtonClick}/>
      <br></br>
      <Input label='Email address' type='email' value='' onChange={onEmailChange}/>
    </>
  )
}

export default App
