import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './Pages/Add/Add'
import ListProduct from './Pages/List/ListProduct'
import OrderProducts from './Pages/Orders/OrderProducts'
import { ToastContainer } from 'react-toastify';


const App = () => {

  const backendUrl = 'http://localhost:3100';


  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add backendUrl={backendUrl} />} />
          <Route path='/list' element={<ListProduct backendUrl={backendUrl} />} />
          <Route path='/orders' element={<OrderProducts backendUrl={backendUrl} />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App
