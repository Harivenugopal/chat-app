import React, { useState } from "react";
import axios from "axios"; // Add this import

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'project-ID': "39816118-2acc-4440-836d-e60624d13212",
      'private-Key':"462b2d32-48a0-4b0a-aca0-28452872c27c",
      'User-Name': username,
      'User-Secret': password
    };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {
      setError('Oops, incorrect Credentials.')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat app</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align='center'>
            <button type="submit" className="button">
              <span>start chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
