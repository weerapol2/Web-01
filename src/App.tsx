import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPages from './components/pages/loginPages';
import HomePages from './components/pages/homePages';

type Props = {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages/>
  },
  {
    path: "/login",
    element: <LoginPages/>
  },
]);

export default function App({}: Props) {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}