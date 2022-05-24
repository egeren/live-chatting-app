import React from 'react';
import { IoSend } from 'react-icons/io5';
import ChatScreen from './ChatScreen';
import EmptyScreen from './EmptyScreen';

interface ChatViewProps {
  activeChatId: string | null | undefined;
}

function ChatView() {
  return (
    <div className="flex flex-col justify-end flex-1 px-4 pt-3">
      {/*<ChatScreen />*/}
      <EmptyScreen />
    </div>
  );
}

export default ChatView;
