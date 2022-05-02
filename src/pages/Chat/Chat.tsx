import React, { useState, useEffect } from 'react';
import Contacts from 'views/Chat/Contacts';

function Chat() {
  return (
    <div className="chat-wrapper w-full h-full flex flex-auto md:p-6 rounded-xl">
      <div className="flex w-full h-full bg-primary-100 md:rounded-xl overflow-hidden">
        <Contacts />
      </div>
    </div>
  );
}

export default Chat;
