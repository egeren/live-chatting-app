import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Chat from 'pages/Chat';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector, useSocket } from 'hooks';
import {
  contactBarActions,
  roomDetailsBarActions,
  userDataActions,
} from 'store';
import { Socket } from 'socket.io-client';
import { useContext } from 'react';
import { IUserDataStore } from 'redux/user/UserSlice';

const SocketContext = React.createContext(null as Socket | null);

function App() {
  const dispatch = useAppDispatch();

  // contact bar and room details bar handlers
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

  //auth handlers

  const socket = useSocket();
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-70 z-10 pointer-events-none" />
      <div className="relative w-full h-full z-30">
        <SocketContext.Provider value={socket}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/chat"
                element={
                  <RequireAuth>
                    <Chat />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
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

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props;
  const userData = useAppSelector((state) => state.userData);
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  console.log(userData.token);

  useEffect(() => {
    socket?.on('logged-in', (data: IUserDataStore) => {
      dispatch(userDataActions.setUserData(data));
      dispatch(userDataActions.setUserStatus(true));

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.id);
    });

    return () => {
      socket?.off('logged-in');
    };
  }, []);
  if (
    userData.token == null ||
    userData.token == '' ||
    userData.token == undefined ||
    userData.isOnline == false
  ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default App;
export { SocketContext };
