import CodeCosmos from './screens/Home'
import Secret from './screens/Secret'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CodeCosmos/>} />
        <Route path="/secret" element={<Secret/>} />
      </Routes>
    </>
  )
}

export default App
