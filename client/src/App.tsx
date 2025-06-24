
import './App.css'
import ShareIcon from './components/icons/ShareIcon'
import { Button } from './components/ui/Button'

function App() {

  return (
    <div>
    <Button
      text='share'
      variant='primary'
      size='md'
      onClick={() => () => console.log("hello")}
      startIcon={<ShareIcon size='md' />}
    />
  
    <Button
      text='share'
      variant='secondary'
      size='md'
      startIcon={<ShareIcon size='md'/>}
      onClick={() => () => console.log("hello")}
    />
    </div>
  )
}

export default App
