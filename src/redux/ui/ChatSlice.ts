import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { arrayRemove } from 'helpers/data';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';
import { IUserDataStore } from 'redux/user/UserSlice';

interface IChatSlice {
  selectedChat: IRoomDataStore | null;
  typers: ITyper[];
}

export interface ITyper {
  userId: string;
  roomId: string;
  username: string;
}

const initialState: IChatSlice = {
  selectedChat: null,
  typers: [],
};

const { reducer, actions } = createSlice({
  name: 'chatScreenData',
  initialState: initialState,
  reducers: {
    setSelectedChat: (state, action: PayloadAction<IRoomDataStore | null>) => {
      state.selectedChat = action.payload;
      return state;
    },
    addTyper: (state, action: PayloadAction<ITyper>) => {
      const isSame = state.typers.find((typer) => {
        return (
          typer.userId === action.payload.userId &&
          typer.roomId === action.payload.roomId
        );
      });

      if (!isSame) {
        state.typers.push(action.payload);
      }
      return state;
    },
    removeTyper: (state, action: PayloadAction<ITyper>) => {
      state.typers = state.typers.filter((typer) => {
        return (
          typer.userId !== action.payload.userId &&
          typer.roomId !== action.payload.roomId
        );
      });
      return state;
    },
    addUserToSelectedChat: (state, action: PayloadAction<IUserDataStore>) => {
      if (state.selectedChat) {
        state.selectedChat.roomUsers.push(action.payload);
      }
      return state;
    },
  },
});

export { reducer, actions };
