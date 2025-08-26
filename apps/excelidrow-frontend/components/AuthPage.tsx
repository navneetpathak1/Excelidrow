"use client";

import { useState } from "react";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }
    if (!isSignin && password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    // Mock action: replace with your API call
    alert(
      isSignin
        ? `Signing in with ${email}`
        : `Creating account for ${email}`
    );
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 m-2 bg-white rounded shadow-md w-80">
        <h1 className="text-xl font-semibold text-center mb-4">
          {isSignin ? "Welcome Back" : "Create Account"}
        </h1>

        <div className="p-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="p-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isSignin && (
          <div className="p-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded p-2"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
        )}

        <div className="pt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 w-full"
            onClick={handleSubmit}
          >
            {isSignin ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
