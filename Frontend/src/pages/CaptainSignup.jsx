import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstName , setFirstName ] = useState('');
const [lastName, setLastName] = useState('');
// const [captainData, setcaptainData] = useState({});
const [ vehicleColor, setVehicleColor ] = useState('')
const [ vehiclePlate, setVehiclePlate ] = useState('')
const [ vehicleCapacity, setVehicleCapacity ] = useState('')
const [ vehicleType, setVehicleType ] = useState('')

const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    if(response.status===201){
      const data=response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehicleCapacity('')
    setVehiclePlate('')
    setVehicleType('')
    
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-lg placeholder:text"
              required
              value={firstName}
              onChange={(e) =>{
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-lg placeholder:text"
              required
              type="text"
              value={lastName}
              onChange={(e) =>setLastName(e.target.value)} 
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
          />
           <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <p className="text-xs leading-tight">
      This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy </span> and <span className="underline">Terms of Service apply. </span>
      </p>
    </div>
  );
};

export default CaptainSignup;
