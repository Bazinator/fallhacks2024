// MessageInput.js

import React, { useState } from 'react';

const MessageInput = ({ onSend, disabled }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim() !== '') {
      onSend(messageText.trim());
      setMessageText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-form">
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        disabled={disabled}
        placeholder="Type your message..."
      />
      <button type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
};

export default MessageInput;
