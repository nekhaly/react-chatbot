export type MessagesState = Array<{
	direction: string,
	timestamp: number,
	message: string,
}>
export const messagesReducer = function (state: MessagesState = [], action: any) {
	switch (action.type) {
		case "MESSAGE_SENT":
			return [
				...state,
				{
					direction: "sent",
					timestamp: new Date().getTime(),
					message: action.payload.message,
				}
			];
		case "MESSAGE_RECEIVED":
			return [
					...state,
					{
						direction: "received",
						timestamp: new Date().getTime(),
						message: action.payload.message,
					}
				];
		default:
			return state;
	}
};