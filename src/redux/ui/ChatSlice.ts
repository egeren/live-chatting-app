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

interface IShouldAddUser {
  user: IUserDataStore;
  room: IRoomDataStore;
}

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
    shouldUpdateSelectedChat: (
      state,
      action: PayloadAction<IRoomDataStore[]>
    ) => {
      action.payload.forEach((room) => {
        if (room.id === state.selectedChat?.id) {
          state.selectedChat = room;
        }
      });
      return state;
    },
    shouldAddUser(state, action: PayloadAction<IShouldAddUser>) {
      if (action.payload.room.id === state.selectedChat?.id) {
        state.selectedChat.roomUsers.push(action.payload.user);
      }
    },
    addUserIfRoomIsSelected(
      state,
      action: PayloadAction<{ roomId: string; user: IUserDataStore }>
    ) {
      if (state.selectedChat?.id === action.payload.roomId) {
        state.selectedChat.roomUsers.push(action.payload.user);
        return state;
      }
    },
  },
});

export { reducer, actions };
