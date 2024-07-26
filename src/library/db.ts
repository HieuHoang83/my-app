import { createClient } from "redis";
const clientRedis = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    //@ts-ignore
    port: process.env.REDIS_PORT,
  },
});
clientRedis.on("error", (err) => {
  console.log(err);
});
if (clientRedis.isOpen) {
  clientRedis.connect();
}
export default clientRedis;
