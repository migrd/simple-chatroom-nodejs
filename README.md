# Chatroom Application
This is a simple chatroom application built with Node.js, Express, and Socket.io. The application allows multiple users to join a chatroom and exchange messages in real-time.

## Features
- Real-time messaging: Users can send and receive messages instantly without refreshing the page.
- Secure communication: The application uses HTTPS to ensure secure communication between the clients and the server.
- Cross-Site Scripting (XSS) Protection: User input is sanitized using the xss library to prevent XSS attacks.
- Easy to use: Users can simply enter their messages and click send to participate in the chatroom.

## Prerequisites
- Node.js: Make sure you have Node.js installed on your machine.

## Installation
1. Clone the repository.

2. Navigate to the project directory.

3. Install dependencies:

4. Generate SSL certificate (for development purposes):

- You can generate self-signed certificates using OpenSSL or obtain valid certificates from trusted certificate authorities for production use. For development, follow these steps:

- Open your terminal and navigate to the project directory.
- Run the following command to generate the certificates:

```bash
    openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```
- This will generate key.pem and cert.pem files in the project directory.

5. Start the server:
```bash
    node index.js
```
6. Open your browser and go to https://localhost:3000 to access the chatroom.

## Usage
- Enter your desired username.
- Type your message in the input field.
- Press Enter or click the "Send" button to send your message to the chatroom.
Your message will be displayed in the chatroom, and other users will be able to see and respond to it in real-time.

License
This project is licensed under the MIT License.
