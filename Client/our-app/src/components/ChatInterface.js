// ChatInterface.js

import React, { useState, useEffect } from 'react';
import MessageInput from './MessageInput';

const ChatInterface = ({ originPlanet, destinationPlanet, onSendMessage, isSending }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (messageText) => {
    if (!originPlanet || !destinationPlanet) {
      alert('Please select both origin and destination planets.');
      return;
    }

    // Add the message to the message log with status 'sending'
    const newMessage = {
      text: messageText,
      sender: originPlanet,
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Call the onSendMessage function to handle the message sending logic
    onSendMessage(messageText);
  };

  // Update message status when isSending changes
  useEffect(() => {
    if (!isSending && messages.length > 0) {
      // Update the status of the last message to 'delivered'
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1 ? { ...msg, status: 'delivered' } : msg
        )
      );
    }
  }, [isSending]);

  return (
    <div className="chat-interface">
      <h2>
        From {originPlanet || '...'} to {destinationPlanet || '...'}
      </h2>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === originPlanet ? 'sent' : 'received'} ${
              message.status
            }`}
          >
            <p>{message.text}</p>
            <span className="timestamp">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="sender">From {message.sender}</span>
            {message.status === 'sending' && <span className="status-indicator"> (Sending...)</span>}
            {message.status === 'delivered' && (
              <span className="status-indicator"> (Delivered)</span>
            )}
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSendMessage} disabled={isSending} />
    </div>
  );
};

export default ChatInterface;

