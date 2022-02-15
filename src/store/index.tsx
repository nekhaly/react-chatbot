import {configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import { persistReducer, persistStore } from "redux-persist";

import { messagesReducer } from "./reducer";

const reducers = combineReducers(
	{ messages: messagesReducer, }
)

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
});

const persistor = persistStore(store);

export default () => {
	return { store, persistor }
};
