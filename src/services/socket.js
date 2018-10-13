import io from "socket.io-client";

const createSocket = room => io(`https://ac3b8dce.ngrok.io?room=${room}`);

export { createSocket };
