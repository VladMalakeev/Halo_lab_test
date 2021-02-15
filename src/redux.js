import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"

import {cardsReducer, cardsModalReducer} from "./modules/cards/cards.reducer";


const reducers = combineReducers({
    cardsReducer,
    cardsModalReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);