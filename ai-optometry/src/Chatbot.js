import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async (message) => {
    try {
      // Send message to AI or backend model (API call)
      const response = await axios.post('/api/generate-report', { message });
      
      // Update chat with user message and bot response
      setChat([
        ...chat, 
        { user: true, text: message }, 
        { user: false, text: response.data }
      ]);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendMessage(userInput);
      setUserInput(''); // Clear input after sending
    }
  };

  return (
    <div>
      <div className="chat-window">
        {chat.map((c, idx) => (
          <div key={idx} className={c.user ? 'user-message' : 'bot-message'}>
            {c.text}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Type your message..." 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
