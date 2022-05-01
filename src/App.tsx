import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-70 z-10 pointer-events-none" />
      <div className="flex justify-center items-center bg-repeated bg-repeat w-full min-h-screen h-full box-border px-8 py-6 bg-opacity-10 bg-black z-0">
        <div className="relative w-full h-full z-30">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/chat" element={'chat page'} />
            </Routes>
          </BrowserRouter>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
