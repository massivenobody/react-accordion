import './App.css'
import Accordion from './components/Accordion'
import { accordionData } from './data/accordionData'

function App() {

  return (
    <>
      <Accordion data={accordionData} />
    </>
  )
}

export default App