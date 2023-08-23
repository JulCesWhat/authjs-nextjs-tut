"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Singup succeded");
      router.push("/login");
    } catch (error: any) {
      console.error("Singup failed");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">
        {loading ? "Loading" : "Signup"}
      </h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-1 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => {
          setUser({
            ...user,
            username: e.target.value,
          });
        }}
        placeholder="username"
      />

      <label htmlFor="email">email</label>
      <input
        className="p-1 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
        className="p-1 text-black"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
        placeholder="password"
      />

      <button onClick={() => onSignup()} disabled={buttonDisabled}>
        Singup Here
      </button>
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
