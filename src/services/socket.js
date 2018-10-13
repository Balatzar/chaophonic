import io from "socket.io-client";

const createSocket = room => io(`https://469db236.ngrok.io?room=${room}`);

export { createSocket };
