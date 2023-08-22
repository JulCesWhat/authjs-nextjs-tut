"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-1"
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
        className="p-1"
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
        className="p-1"
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

      <button onClick={() => onSignup()}>Singup Here</button>
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
