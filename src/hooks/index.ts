import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const socketUrl = 'localhost:8080';
export const useSocket = () => {
  const socket = io(socketUrl);
  socket.on('connect', () => {
    console.log('socket connected');
  });

  return socket;
};
