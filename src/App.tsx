import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Chat from 'pages/Chat';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from 'hooks';
import { contactBarActions, roomDetailsBarActions } from 'store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      const window = e.target as Window;
      if (window.innerWidth >= 976) {
        dispatch(contactBarActions.setContactsBar(true));
        dispatch(roomDetailsBarActions.setRoomDetailsBar(true));
      } else {
        dispatch(contactBarActions.setContactsBar(false));
        dispatch(roomDetailsBarActions.setRoomDetailsBar(false));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTest = () => {
    dispatch(contactBarActions.toggleContactsBar());
  };
  const handleTest2 = () => {
    dispatch(roomDetailsBarActions.toggleRoomDetailsBar());
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
        className="fixed md:left-96 left-32 top-32 mx-auto z-50 bg-white"
        onClick={handleTest}
      >
        TEST BUTTON
      </button>
      <button
        className="fixed md:left-96 right-32 top-32 mx-auto z-50 bg-white"
        onClick={handleTest2}
      >
        TEST BUTTON
      </button>
    </>
  );
}

export default App;
