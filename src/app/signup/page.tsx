// SignupPage.tsx
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import React, { useEffect } from "react";
import { Card } from "@material-tailwind/react";

export default function SignupPage() {
  const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        student_id :"",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async (e: React.FormEvent<HTMLFormElement>) =>  {
      e.preventDefault();
    setLoading(true);  
      try {
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col items-center justify-center align-middle max-w-md w-full space-y-8">
        <div>
          <h2 className="  mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <Card
          placeholder=""
          color="transparent"
          className="md: max-w-sm p-5 bg-teal-100"
        >
        <form className="mt-8 space-y-6" onSubmit={onSignup}>
     
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className=" flex justify-center align-middle">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
            </div>
            <div className=" flex justify-center align-middle">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            </div>
            <div className=" flex justify-center align-middle">
              <label htmlFor="Student Id" className="sr-only">
                Student ID
              </label>
              <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="Id"
              type="Student Id"
              value={user.student_id}
              onChange={(e) => setUser({...user, student_id: e.target.value})}
              placeholder="Student ID"
              />
            </div>
            <div className=" flex justify-center align-middle">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              placeholder="password"
              />
            </div>
          </div>
          <div className=" flex justify-center align-middle">
            <button
              type="submit"
              className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
        </Card>
        <div className="text-center">
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};


