import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Footer from "./components/Footer";
import RoomsDetails from "./pages/RoomsDetails";
import MyBookings from "./pages/MyBookings";
import HotelRegs from "./components/HotelRegs";
import Layout from "./pages/HotelOwner/Layout";
import Dashboard from "./pages/HotelOwner/Dashboard";
import AddRoom from "./pages/HotelOwner/AddRoom";
import ListRoom from "./pages/HotelOwner/ListRoom";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Signup from "./components/Signup";
import About from "./pages/About";


function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelRegs/>} 
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/rooms/:id' element={<RoomsDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="add-room" element={<AddRoom/>}/>
              <Route path="room-lists" element={<ListRoom/>}/>
          </Route>
        </Routes>
        <ToastContainer/>
      </div>
      <Footer/>
    </>
  )
}

export default App
