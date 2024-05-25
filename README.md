![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# Live Stream

Real-time user interaction live video sharing system


_This is a simple project, without business rules._

## Functionalities

- Perform your live stream without going through external providers, host it yourself;
- Interaction with live followers;


## How to run locally?

Clone this project

```bash
  git clone https://github.com/itallonet/live-stream
```

Enter the project directory

```bash
  cd live-stream
```

Start the Docker

```bash
  docker compose up -d 
```

Start your live in OBS to:

- Server: rtmp://localhost:1935/stream
- Transmission Key: 123
- Access: http://localhost:3000 

Transmission key can be changed with required configuration, explore the project.

## Author

- [@itallonet](https://www.github.com/itallonet)

