// import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage.tsx/Homepage";
import Signup from "./pages/AuthPages/Signup";
import Login from "./pages/AuthPages/Login";
import DashboardPage from "./pages/DashBoard/DashBoard.js";

function App() {
  return (
    <div className="">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
