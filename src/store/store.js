import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import {defaultReducer} from "../reducers/reducer";

const logger = createLogger();

const reducers = combineReducers({
    reducer: defaultReducer
})

export let store = createStore(reducers, applyMiddleware(logger));