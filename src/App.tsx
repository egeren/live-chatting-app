import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="absolute w-screen h-screen left-0 top-0 bg-black bg-opacity-70 z-0 pointer-events-none" />
      <div className="bg-repeated w-full h-screen px-8 py-6 bg-opacity-10 bg-black z-auto overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
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
