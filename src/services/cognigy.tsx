import { SocketClient } from "@cognigy/socket-client"

export const client = new SocketClient(
  process.env.COGNIGY_SOCKET_URL,
  process.env.COGNIGY_SOCKET_TOKEN, {
  forceWebsockets: true,
});

(async () => {
  await client.connect();

  client.on("finalPing", () => {
    console.log("bot is done processing a message");
  });
})();

export const setListeners = (options: { messageReceivedHandler: Function }) => {
  const { messageReceivedHandler } = options

  client.on("output", output => {
		messageReceivedHandler(output)
	});

}