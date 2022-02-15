import { SocketClient } from "@cognigy/socket-client"

export const client = new SocketClient(
  process.env.COGNIGY_SOCKET_URL,
  process.env.COGNIGY_SOCKET_TOKEN, {
  forceWebsockets: true,
});

(async () => {
  await client.connect();
})();

export const setListeners = (options: { messageReceivedHandler: Function, messageProcessingHandler: Function }) => {
  const { messageReceivedHandler, messageProcessingHandler } = options

  client.on("output", output => {
		messageReceivedHandler(output);
	});

  client.on("typingStatus", (status) => {
    status.status === "typingOn" ? messageProcessingHandler(true) : messageProcessingHandler(false); 
  });

}

export const removeListeners = () => {
  client.off("output", () => {
	});

  client.off("typingStatus", () => {
  });
}