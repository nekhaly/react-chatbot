import { configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from './reducer';

const store = configureStore({
	reducer: {
		messages: messagesReducer,
	},
})
export default store;
