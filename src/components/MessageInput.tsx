import * as React from "react";
import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import { client } from "./../services/cognigy";
import { useDispatch } from "react-redux";

export default function MessageInput() {

    const [message, setMessage] = React.useState("");
		const dispatch = useDispatch();

    const sendMessage = () => {
				dispatch({
					type: "MESSAGE_SENT",
					payload: {
						message
					}
				});
        client.sendMessage(message);
    }

    return (
			<>
				<form style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					margin: "auto"}} noValidate autoComplete="off"
					onSubmit={e => {
						e.preventDefault();
						sendMessage();
					}}
					>
					<TextField
							label="Message"
							style={{width: "100%", marginRight: "10px"}}
							onChange={(e) => setMessage(e.target.value)}
					/>
					<Button variant="contained" color="primary" onClick={sendMessage}>
							<SendIcon />
					</Button>
				</form>
			</>
    )
}