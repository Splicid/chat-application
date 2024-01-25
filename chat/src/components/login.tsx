import React, { useState } from "react";
import { getUser } from "../userApi";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await getUser(formData);
            console.log(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-dark">
      <div className="p-6 bg-white dark:bg-midnight rounded shadow-md">
        <h2 className="text-lg font-semibold text-gray-100 dark:text-main-text">Login</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-main-text">Email</label>
            <input 
                type="email" 
                name="email"
                id="email"
                className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-main-text">Password</label>
            <input 
                type="password" 
                name="password"
                id="password"
                className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
                />
          </div>
          <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded dark:hover:bg-button-hover dark:bg-button-color text-button-text">Log In</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
