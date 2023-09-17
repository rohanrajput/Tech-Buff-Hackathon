import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {SERVER_URL} from "./config/dev";

const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));


    }

  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
      <div className="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
        <p className="mb-20 font-bold tracking-wider">CORINE</p>
        <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
          Start your <br />
          journey with us
        </p>
        <p className="mb-28 leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          voluptas a officia. Omnis.
        </p>
        <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
          <p className="mb-3 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea
            voluptates sapiente!
          </p>
          <div className="">
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium">Simon Lewis</strong>
                <span className="text-xs text-gray-200">
                  {" "}
                  Published 12 Bestsellers{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 w-1/3">
        <h2 className="mb-2 text-3xl font-bold">Sign in</h2>
        <a href="/" className="mb-10 block font-bold text-gray-600">
          Sign in to your accout
        </a>
        
        <p className="mb-1 font-medium text-gray-500">Name</p>
        <div className="mb-4 flex flex-col">
          <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={inputChangeHandler}
              className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <p className="mb-1 font-medium text-gray-500">Email</p>
        <div className="mb-4 flex flex-col">
          <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input
              type="email"
              id="signup-email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
              className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <p className="mb-1 font-medium text-gray-500">Password</p>
        <div className="mb-4 flex flex-col">
          <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input
              type="password"
              id="signup-password"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
              className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Choose a password"
            />
          </div>
        </div>
        <button className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signin;