"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useRouter} from "next/navigation";
import { Card } from "@material-tailwind/react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error) {
      console.error("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center bg-teal-50 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="image"
          />
        </div>
        <Card
          placeholder=""
          color="transparent"
          className="md:w-1/3 max-w-sm p-5 bg-teal-100"
        >
          <form onSubmit={onLogin}>
            <div className="text-center md:text-left">
              <label className="mr-1">Sign in with</label>
            </div>
            <input
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
            <input
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
                disabled={loading || buttonDisabled}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <div className="text-red-600 hover:underline hover:underline-offset-4">
                  Register
                </div>
              </Link>
            </div>
          </form>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-4">
        © 2024 Kyso. All rights reserved.
      </footer>
    </>
  );
}
