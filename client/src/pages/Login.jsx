import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';

export default function Login() {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [childName, setChildName] = useState('');

  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
  };

  const handleLogin = () => {
    console.log('Login Email: ', loginEmail);
    console.log('Login Password: ', loginPassword);

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // if (email && )

  };

  const handleRegister = () => {
    console.log('First Name: ', newFirstName);
    console.log('Last Name: ', newLastName);
    console.log('New Email: ', newEmail);
    console.log('New Password: ', newPassword);
    console.log('Child Name: ', childName);

    // State is already declared - updating state function. 

    setNewEmail(document.querySelector('#new_email').value.trim())
    setNewPassword(document.querySelector('#new_password').value.trim())
    setNewFirstName(document.querySelector('#user_first_name').value.trim())
    setNewLastName(document.querySelector('#user_last_name').value.trim())
    setChildName(document.querySelector('#child_name').value.trim())

  
    
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-blue-600 p-4 rounded-lg w-80 text-center border-10 border-black">
        {showCreateAccountForm ? (
          <div>
            <header id='create_account_form' className="text-2xl font-semibold text-white">Create an Account</header>
            <div className="space-y-2">
              <label htmlFor="user_first_name" className="block font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="user_first_name"
                placeholder="First Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_last_name" className="block font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="user_last_name"
                placeholder="Last Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new_email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="new_email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new_password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="child_name" className="block font-medium text-gray-700">
                Child's Name
              </label>
              <input
                type="text"
                id="child_name"
                placeholder="Child's Name"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
              />
            </div>
            
          </div>
        ) : (
          <div className="space-y-4">
            <header id='login_form' className="text-2xl font-semibold text-white">Login</header>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full bg-white text-black shadow-md"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>
        )}

<div className="mt-6 space-y-4">
  {showCreateAccountForm ? (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
      onClick={toggleCreateAccountForm}
    >
      Back to Login
    </button>
  ) : (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
      onClick={() => setShowCreateAccountForm(true)}
    >
      Create an Account
    </button>
  )}

  {showCreateAccountForm ? (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      onClick={handleRegister}
    >
      Register
    </button>
  ) : (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      onClick={handleLogin}
    >
      Login
    </button>
  )}
</div>
      </div>
    </div>
  );
};