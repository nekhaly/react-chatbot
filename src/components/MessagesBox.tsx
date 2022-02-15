import * as React from "react";
import { useDispatch, useSelector} from 'react-redux';

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import { MessageBubble } from "./MessageBubble";

import { getMessages } from '../store/selector';

import type { MessagesState } from "./../store/reducer"


const StyledBox = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	paddingBottom: theme.spacing(2),
}));

const TypingIndicator = styled(LinearProgress)(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

export default function MessagesBox(props: { isProcessingMessage: boolean}) {
	const messages: MessagesState = getMessages();
	const { isProcessingMessage } = props;

	return (
		<StyledBox>
			{renderMessageBubbles(messages)}
			{ isProcessingMessage && <TypingIndicator /> }
		</StyledBox>
	);
}

function renderMessageBubbles(messages: MessagesState) {
	if(messages.length) {
		return (<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
		>
			{messages.map(message => <MessageBubble key={message.direction+message.timestamp} className={`message-bubble ${message.direction}`}>{message.message}</MessageBubble>)}
		</Stack>)
	}
	return null;
}
