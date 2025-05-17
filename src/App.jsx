import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Router } from 'react-router-dom'
import AdminPortal from './Pages/AdminPortal'
import Medicines from './Pages/Medicines'
import Appointments from './Pages/Appointments'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Router>
       <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="flex gap-4 mb-6">
        <Link to="/admin" className="text-blue-600 hover:underline">Admin</Link>
          <Link to="/medicines" className="text-green-600 hover:underline">Medicines</Link>
          <Link to="/appointments" className="text-purple-600 hover:underline">Appointments</Link>
          </nav>

          <Route>
            <Route path="/admin" element={<AdminPortal/>}/>
            <Route path="/medicines" element={<Medicines/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
          </Route>
          </div>
     </Router>
     </>  )
}

export default App
