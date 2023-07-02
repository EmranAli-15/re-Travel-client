import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import { RouterProvider } from "react-router-dom";
import router from './routes/Router.tsx';
import AuthProvider from './provider/AuthProvider.tsx';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
