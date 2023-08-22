import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import AnimalGame from "./pages/AnimalGame.jsx";
import ColorGame from "./pages/ColorGame.jsx";
import SpellingGame from "./pages/SpellingGame.jsx";

const routes = [
  {
    path:"/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/animalgame",
        element: <AnimalGame />
      },
      {
        path: "/colorgame",
        element: <ColorGame />
      },
      {
        path: "/spellinggame",
        element: <SpellingGame />
      }
    ]
  }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
