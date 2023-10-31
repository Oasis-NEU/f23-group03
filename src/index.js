import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feed from './Feed';
import Profile from './Profile';
import DetailCard from './DetailCard';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/detailcard",
    element: <DetailCard/>,
  }
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
