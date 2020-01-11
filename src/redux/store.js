import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {apiMiddleware} from './api-middleware'
import rootReducer from '../reducers/rootReducer'

const initialState = {};
const enhancers = [];
const middleware = [thunk, apiMiddleware()];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    initialState,
    composedEnhancers
)
