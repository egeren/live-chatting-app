import React, { createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Chat from 'pages/Chat';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector, useSocket } from 'hooks';
import { contactBarActions, roomDetailsBarActions } from 'store';
import { Socket } from 'socket.io-client';

const SocketContext = React.createContext(null as Socket | null);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      const window = e.target as Window;
      if (window.innerWidth >= 976) {
        dispatch(contactBarActions.setContactsBar(true));
        dispatch(roomDetailsBarActions.setRoomDetailsBar(false));
      } else {
        dispatch(contactBarActions.setContactsBar(false));
        dispatch(roomDetailsBarActions.setRoomDetailsBar(false));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('APP ROOT RENDER!!');

  const socket = useSocket();
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-70 z-10 pointer-events-none" />
      <div className="relative w-full h-full z-30">
        <SocketContext.Provider value={socket}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </SocketContext.Provider>
      </div>
      <ToastContainer />
      {/*<button
        className="fixed md:left-96 w-20 left-32 top-32 mx-auto z-50 bg-white"
        onClick={handleTest}
      >
        TEST BUTTON
      </button>
      <button
        className="fixed md:left-96 w-20 right-32 top-32 mx-auto z-50 bg-white"
        onClick={handleTest2}
      >
        TEST BUTTON
      </button>*/}
    </>
  );
}

export default App;
export { SocketContext };
