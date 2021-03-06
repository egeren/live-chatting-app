import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { IUserDataStore } from 'redux/user/UserSlice';
import { IMessageData, IRoomDataStore } from 'redux/rooms/RoomsSlice';
import {
  chatScreenActions,
  popupActions,
  roomsDataActions,
  usersDataActions,
} from 'store';
import { ITyper } from 'redux/ui/ChatSlice';

import { InvitedToRoomPopup } from 'views/PopupViews';

const socketUrl = process.env.REACT_APP_SERVER_ADDRESS || 'localhost:8080';

export const useSocket = () => {
  let error_msg: React.ReactText;
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const socket = useMemo(() => {
    console.log('socketmemo', userData.token);
    return io(socketUrl, {
      auth: {
        token: userData.token ? userData.token : uuid(),
        userId: userData.id ? userData.id : uuid(),
      },
    });
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected');
      console.log(socket.auth);
      if (toast.isActive(error_msg)) {
        toast.dismiss(error_msg);
        toast.success('Connected to server!');
      }
    });

    socket.on('connect_error', () => {
      if (!toast.isActive(error_msg))
        error_msg = toast.error('Could not connect to server. Retrying...');
    });

    socket?.on('error', (err) => {
      toast.error(err, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
    });

    socket?.on(
      'server-data',
      (data: {
        users: IUserDataStore[];
        messages: any;
        rooms: IRoomDataStore[];
      }) => {
        console.log('server data received');
        console.log(data);
        dispatch(roomsDataActions.setRoomsData(data.rooms));
        dispatch(chatScreenActions.shouldUpdateSelectedChat(data.rooms));
        dispatch(usersDataActions.setUsersData(data.users));
      }
    );

    socket?.on('new-user', (data: IUserDataStore) => {
      dispatch(usersDataActions.addUser(data));
    });

    socket?.on('received-messsage', (data: IMessageData) => {
      dispatch(roomsDataActions.addMessage(data));
      const typerToRemoved: ITyper = {
        userId: data.userId,
        roomId: data.roomId,
        username: '',
      };
      dispatch(chatScreenActions.removeTyper(typerToRemoved));
      console.log(data);
    });
    socket?.on('someone-typing', (data) => {
      dispatch(chatScreenActions.addTyper(data));
      //delete typer after 5 seconds
      setTimeout(() => {
        dispatch(chatScreenActions.removeTyper(data));
      }, 5000);
    });

    socket?.on('invite-user', (data: IRoomDataStore) => {
      const popupData = {
        room: data,
      };

      dispatch(popupActions.setPopupData(popupData));
      dispatch(popupActions.openPopup(InvitedToRoomPopup));
    });

    socket?.on(
      'join-room',
      (data: { roomId: string; user: IUserDataStore }) => {
        dispatch(roomsDataActions.addUserToRoom(data));
        dispatch(chatScreenActions.addUserIfRoomIsSelected(data));
      }
    );

    socket?.on('update-users', (data) => {
      dispatch(usersDataActions.setUsersData(data));
    });

    socket?.on('update-rooms', (data: IRoomDataStore[]) => {
      dispatch(roomsDataActions.setRoomsData(data));

      dispatch(chatScreenActions.shouldUpdateSelectedChat(data));
    });

    return () => {
      socket?.off('connect');
      socket?.off('connect_error');
      socket?.off('error');
      socket?.off('server-data');
      socket?.off('new-user');
      socket?.off('received-messsage');
      socket?.off('someone-typing');
      socket?.off('invite-user');
      socket?.off('join-room');
      socket?.off('update-users');
      socket?.off('update-rooms');
    };
  }, []);

  return socket;
};

export default useSocket;
