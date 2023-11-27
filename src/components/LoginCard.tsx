import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { AxiosResponse } from "axios";
import { error } from "console";
import useAuth from "../hooks/useAuth";
import { useSelector } from "../store";
import { string } from "yup";
import { useDispatch } from "react-redux";
import { saveData } from "../store/reducers/usersInfo";

const baseURL = "http://localhost:5000";

const LoginCard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [userdata, setUserData] = useState<object>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post<any, AxiosResponse<{ info: object }>>('http://localhost:5000/api/v1/users/login', formData)
      .then((res: any) => {
          console.log(res.data);
          
          if (res.data[0].code === 200) {          
          // setUserData({ info: res.data.info });
          dispatch(saveData(res.data[0].info));
          navigate('home');

        } else {
          alert('email unverified!');
        }
      })
      .catch((error) => console.log("usererror: ", error));
    // login(formData.email, formData.password)
    // .then((res) =>{
    //   console.log(res);
      
    //    navigate('home')});
  }

  return (
    <>
      <div className="flex h-[50vh] w-[30vw] m-auto mt-[15vh] flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="home" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-900">
            Not a member?{' '}
            <a href="home" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginCard;