import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import Feed from './js/Feed';
import Profile from './js/Profile';
import DetailCard from './js/DetailCard';

import reportWebVitals from './js/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from './js/Settings';

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
  },
  {
    path: "/settings",
    element: <Settings/>,
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
