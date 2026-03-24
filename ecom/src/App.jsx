
import './App.css';
import { HomePage } from './pages/HomePage';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={  <HomePage />} />
      <Route path="checkout" element={<div>TESTING</div>}/>
    </Routes>

    </>
  )
}

export default App
