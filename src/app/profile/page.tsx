"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  _id: string,
  email: string,
  username: string
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      toast.success("Logout sucessful");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const { data } = await axios.get("/api/users/profile");
    setUser(data.user as User);
  };

  useEffect(() => {
    try {
      getUserDetails();
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <h3>{user?.username}</h3>
      <hr />
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
