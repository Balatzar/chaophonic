import io from "socket.io-client";

const createSocket = room => io(`https://chaophonic.skilled.af/?room=${room}`);

export { createSocket };
