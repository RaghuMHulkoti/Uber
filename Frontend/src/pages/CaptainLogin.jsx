import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [captainData, setcaptainData] = useState({});
  const submitHandler =(e)=>{
    e.preventDefault();
    setcaptainData({
      email:email,
      password:password
    })
    setemail('');
    setpassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text"
            required
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
            type="text"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text"
            required
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text">
            login
          </button>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login'  className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
