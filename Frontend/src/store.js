import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
	loading: false
};

export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
);