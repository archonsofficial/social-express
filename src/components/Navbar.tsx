import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from "react";
import toast from "react-hot-toast";



export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {authUser ,checkAuth,logout}=useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);
  console.log({ authUser });

  const handleSubmit=(async()=>{
    try{
      if(authUser? await logout():null){
        console.log("logout Successfull");
        toast.success("Logout Successfull");
      }
    }catch(err){
      console.log(err);
    }
  });

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex text-3xl font-semibold text-indigo-600">
            Social 
            
            <div className='text-white px-1 '>  Express </div>
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/dashboard" className="text-gray-300 hover:text-white transition duration-300">
              Dashboard
            </NavLink>
            <NavLink to="/createcontent" className="text-gray-300 hover:text-white transition duration-300">
              Content
            </NavLink>
            <NavLink to="/scheduler" className="text-gray-300 hover:text-white transition duration-300">
              Scheduler
            </NavLink>
            <NavLink to="/analytics" className="text-gray-300 hover:text-white transition duration-300">
              Analytics
            </NavLink>
          </div>

          {/* Desktop Signup Button */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/signup"
              className="text-indigo-400 hover:text-white font-semibold py-2 px-4 rounded-md border border-indigo-500 hover:bg-indigo-500 transition duration-300"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-800 rounded-lg shadow-lg mt-2 p-4 space-y-4 transition-all duration-300 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <NavLink to="/dashboard" className="block text-gray-300 hover:text-white transition duration-300">
            Dashboard
          </NavLink>
          <NavLink to="/createcontent" className="block text-gray-300 hover:text-white transition duration-300">
            Content
          </NavLink>
          <NavLink to="/scheduler" className="block text-gray-300 hover:text-white transition duration-300">
            Scheduler
          </NavLink>
          <NavLink to="/analytics" className="block text-gray-300 hover:text-white transition duration-300">
            Analytics
          </NavLink>
          <NavLink
          onClick={authUser ? handleSubmit : undefined}
            to={!authUser?"/login":"/"}
            className="block text-indigo-400 hover:text-white font-semibold py-2 px-4 rounded-md border border-indigo-500 hover:bg-indigo-500 transition duration-300"
          >
            
            {authUser ? "Logout" : "Login"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
