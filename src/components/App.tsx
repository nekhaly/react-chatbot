import * as React from "react";

import ChatBox from "./ChatBox";
import MessagesBox from "./MessagesBox";
import MessageInput from "./MessageInput";
import { setListeners } from "../services/cognigy";
import { useDispatch } from 'react-redux';

export interface Props {
	test: string;
}

export const App = (props: Props) => {

	const dispatch = useDispatch();

	setListeners({
		messageReceivedHandler: (output: any) => {
			dispatch({
				type: "MESSAGE_RECEIVED",
				payload: {
					message: output.text
				}
			})
		}
	})

	return (
		<ChatBox>
			<MessagesBox />
			<MessageInput />
		</ChatBox>
	)
	}