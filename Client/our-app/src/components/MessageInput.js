import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      setError('Please enter a message before sending.');
      return;
    }

    onSend(message.trim());
    setMessage(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-form">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        aria-label="Message Input"
        required
      />
      <button type="submit">Send</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default MessageInput;
