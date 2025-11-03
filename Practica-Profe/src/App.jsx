import { Navigate } from 'react-router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<home />} />
          <Route path="/login" element={<login />} />
          <Route path="/register" element={<register />} />

          <Route path="/register" element={<Navigate to='/home'/>} />
        </Routes>
      </BrowserRouter>,


    </>
  )
}

export default App
