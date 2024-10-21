# Chat App with WebSockets

This is a real-time chat application built using plain HTML, CSS, and Socket.IO. The app allows users to communicate in real-time, with live message updates and typing indicators, powered by WebSockets.

## Features

- **Real-Time Messaging**: Instant message updates using WebSockets via Socket.IO.
- **Typing Indicator**: Displays when a user is typing.
- **Multiple User Support**: Allows communication between multiple users simultaneously.
- **Simple UI**: Clean, minimalistic design using plain HTML and CSS.
- **Auto Scroll**: Chat view automatically scrolls to the latest message.
- **Message Timestamp**: Each message is displayed with a timestamp for better conversation tracking.

## Technologies Used

- **Frontend**:
  - **HTML5**: Markup for the chat interface.
  - **CSS3**: Styling and layout of the chat app.
  - **JavaScript**: Client-side interaction for sending/receiving messages.
  
- **Backend**:
  - **Node.js**: Server-side runtime environment.
  - **Socket.IO**: For real-time, bi-directional communication between client and server.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/chat-app-with-websockets.git
   cd chat-app-with-websockets
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then, install the required packages using npm:
   ```bash
   npm install
   ```

3. **Run the application**:
   Start the Node.js server:
   ```bash
   node index.js
   ```

4. **Access the app**:
   Open your browser and navigate to `http://localhost:3000` to start chatting.

## How It Works

1. **Socket.IO Integration**: 
   - The app establishes a WebSocket connection between the server and all connected clients. 
   - When a user sends a message, it is broadcasted to all other users in real-time.
   
2. **Client-Side Interactions**:
   - The frontend HTML and CSS provide a user-friendly interface for sending messages.
   - JavaScript handles the event listeners for sending and receiving messages over the WebSocket connection.

3. **Typing Indicator**: 
   - As a user starts typing, a "typing..." indicator is shown to other users.
   
## Folder Structure

```bash
├── index.html        # Main chat interface
├── styles.css        # Stylesheet for the chat app UI
├── client.js         # Handles client-side JavaScript for socket interactions
├── server.js         # Node.js backend server using Socket.IO
└── package.json      # Project configuration and dependencies
```

## Contributing

Feel free to contribute to the project by submitting a pull request or opening an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
