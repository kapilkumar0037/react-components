import './App.scss'
import { Button } from './components/Button'

function App() {
  const onButtonClick = () => {
    console.log('Button clicked!')
  }

  return (
    <>
      <Button label='Primary' className='btn-primary' type='button'  onClick={onButtonClick}/>
      <Button label='Primary' className='btn-danger' type='button'  onClick={onButtonClick}/>
    </>
  )
}

export default App
