// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <div className="text-2xl font-bold flex justify-center items-center gap-x-2">
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
