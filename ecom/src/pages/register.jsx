import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { authApi,ecomApi } from "../api/axios"

export const Register = ({setUser}) => {
  const[error,setError]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();

  const [formdata,setFormdata]=useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
   setFormdata({...formdata,[e.target.name]: e.target.value})
  }

  const handlesubmit=async (e)=>{
   e.preventDefault();
   setError("");
   setLoading(true);

   try{
     const res= await authApi.post('/api/users/register',formdata)

     localStorage.setItem("token",res.data.token)

  authApi.defaults.headers.common["Authorization"] =
  `Bearer ${res.data.token}`;

  ecomApi.defaults.headers.common["Authorization"] =
  `Bearer ${res.data.token}`;

     setUser({
      id: res.data.id,
      username: res.data.username,
      email: res.data.email
     });

      navigate('/home');
   }
   catch(err){
    console.log(err);
     setError(err.response?.data?.message || "registration failed");
   }

   setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* only fix */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">REGISTER</h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handlesubmit}>
          <div>
            <label>Username:</label>
            <input type="text"
              className="block w-full border border-gray-200 rounded-md focus-ring-2 mb-3 focus:ring-blue-200 p-2"
              placeholder="Enter name"
              required
              name="username"
              value={formdata.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input type="email"
              className="block w-full border border-gray-200 rounded-md focus-ring-2 mb-3 focus:ring-blue-200 p-2"
              placeholder="Enter email"
              required
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input type="password"
              className="block w-full border border-gray-200 rounded-md focus-ring-2 mb-3 focus:ring-blue-200 p-2"
              placeholder="Enter Password"
              required
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit"
            disabled={loading}
            className="bg-gray-800 text-white p-2 rounded-md block mx-auto">
            {loading ? "Loading..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  )
}