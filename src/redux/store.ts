import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "./dataReducer";
import {loadingReducer} from "./loadingReducer";

const reducer = combineReducers({
	dataReducer: dataReducer,
	loadingReducer: loadingReducer
})
export type RootStoreType = ReturnType<typeof reducer>
export const store = createStore(reducer, applyMiddleware(thunk))