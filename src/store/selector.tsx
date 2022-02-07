import { useSelector } from "react-redux";
import type { MessagesState } from "./reducer"

export function getMessages() {
    const messages = useSelector((state: { messages: MessagesState }) => state.messages)
    return messages;
}