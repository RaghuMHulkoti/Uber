import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [firstName , setFirstName ] = useState('');
const [lastName, setLastName] = useState('');
const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div>
          <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text">
            login
          </button>
          <p className="text-center">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <p className="text-xs leading-tight">
      This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy </span> and <span className="underline">Terms of Service apply. </span>
      </p>
    </div>
    </div>

  );
};

export default UserSignup;
