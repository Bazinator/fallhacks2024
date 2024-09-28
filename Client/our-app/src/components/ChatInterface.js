import React, { useState } from 'react';
import MessageInput from './MessageInput';
import { calculateDistanceBetweenPlanets, calculateTravelTime } from './distances';

const ChatInterface = ({ originPlanet, destinationPlanet }) => {
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (messageText) => {
    setIsSending(true);

    // Calculate distance and travel time
    const distance = calculateDistanceBetweenPlanets(originPlanet, destinationPlanet);
    const travelTime = calculateTravelTime(distance); // in seconds

    // Add the message to the message log with status 'sending'
    const newMessage = {
      text: messageText,
      sender: originPlanet,
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate message travel and update status
    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg === newMessage ? { ...msg, status: 'delivered' } : msg
        )
      );
      setIsSending(false);
    }, travelTime * 1000); // Convert seconds to milliseconds
  };

  return (
    <div className="chat-interface">
      <h2>
        From {originPlanet} to {destinationPlanet}
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
            {message.status === 'delivered' && <span className="status-indicator"> (Delivered)</span>}
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSendMessage} disabled={isSending} />
    </div>
  );
};

export default ChatInterface;
