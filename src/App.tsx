import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Chat from 'pages/Chat';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from 'hooks';
import { contactBarActions } from 'store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      const window = e.target as Window;
      if (window.innerWidth >= 976) {
        dispatch(contactBarActions.setContactsBar(true));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTest = () => {
    dispatch(contactBarActions.toggleContactsBar());
  };
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-70 z-10 pointer-events-none" />
      <div className="relative w-full h-full z-30">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
      <button
        className="fixed left-52 bottom-10 mx-auto z-50 bg-white"
        onClick={handleTest}
      >
        TEST BUTTON
      </button>
    </>
  );
}

export default App;
