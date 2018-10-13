import io from "socket.io-client";

const createSocket = room => io(`http://178.128.199.190:4000/?room=${room}`);

export { createSocket };
