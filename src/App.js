// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;








import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import io from 'socket.io-client';
import './App.css';
import Videos from "./Features/Videos.js"
import Login from './Features/Login.js';
import Navbar from './layout/Navbar.js';
import Signup from './Features/Signup.js';
import Profile from './Features/Profile.js';
import Video from './Features/Video.js';

// Connect to WebSocket server
// const socket = io('http://localhost:4000');

function App() {
  // const [messages, setMessages] = useState([]);
  // const [username, setUsername] = useState('');
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   // Load chat history
  //   socket.on('chat history', (history) => {
  //     setMessages(history);
  //   });

  //   // Listen for incoming messages
  //   socket.on('receive message', (message) => {
  //     setMessages((prev) => [...prev, message]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // const sendMessage = () => {
  //   if (username && text) {
  //     const message = { username, text };
  //     socket.emit('send message', message);
  //     setText('');
  //   }
  // };
  return (
    <>
   
    {/* <div className="App">
      <h1>Chat App</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div> */}
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home/:id' element={<Videos/>}/>
        <Route path='/:id/profile' element={<Profile/>}/>
        <Route path='/video/:id/:videoid' element={<Video/>}/>
      </Routes>
    </Router>

     </>
  );
}

export default App;
