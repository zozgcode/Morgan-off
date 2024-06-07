"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { mockAccounts } from "../mockData/MockData";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError("User not found");
      return;
    }
    if (userAccount.holder.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
    router.push("/dashboard");
  };

  return (
    <div className="">
      <div className="h-screen">
        <div className="px-4 pt-6">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="https://i.imgur.com/jodPSnj.png"
              width={100}
              height={100}
              className="w-[130px] h-[130px]"
              alt="logo"
            />
          </div>
          <p className="my-[2px] text-center text-[#B21D6E] font-medium text-xl">Morgan Offshore Banking</p>
          <div className="mt-[2px] mb-[24px]">
            {error && (
              <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
                {error}
              </p>
            )}
          </div>
          
          <div className="bg-white border mx-auto rounded-xl max-w-[400px] p-4">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="Username"
                    className="text-[#5c5c5c] hidden text-[16px]"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="password"
                    className="text-[#5c5c5c] hidden text-[16px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#B21D6E] text-white font-semibold w-full rounded-[10px]"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
