import * as React from "react";

import ChatBox from "./ChatBox";
import MessagesBox from "./MessagesBox";
import MessageInput from "./MessageInput";
import { setListeners, removeListeners } from "../services/cognigy";
import { useDispatch } from 'react-redux';

export const App = () => {

	const dispatch = useDispatch();
	const [isProcessingMessage, setIsProcessingMessage] = React.useState(false);

	React.useEffect(() => {
		setListeners({
			messageReceivedHandler: (output: any) => {
				dispatch({
					type: "MESSAGE_RECEIVED",
					payload: {
						message: output.text
					}
				})
			},
			messageProcessingHandler: (isProcessingMessage: boolean) => {
				setIsProcessingMessage(isProcessingMessage);
			}
		})
	  return () => {
		removeListeners();
	  };
	}, [])

	return (
		<ChatBox>
			<MessagesBox isProcessingMessage={isProcessingMessage} />
			<MessageInput />
		</ChatBox>
	)
	}