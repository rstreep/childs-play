import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import AnimalGame from "./pages/AnimalGame.jsx";
import ColorGame from "../src/components/color_components.jsx";
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
        path: "/colorGame",
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
