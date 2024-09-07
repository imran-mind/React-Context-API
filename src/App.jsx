import './App.css'
import { CounterProvider } from './CounterContext'
import ParentComponent from './ParentComponent'

function App() {

  return (
      <CounterProvider>
        <ParentComponent/>
      </CounterProvider>
  )
}

export default App
