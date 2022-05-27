import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import gistsReducer from "./gists/reducers";


const allReducers = combineReducers({
   // profile: profileReducer,
    gists: gistsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));