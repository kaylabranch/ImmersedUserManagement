// Configure Redux store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { isLoading, teamList } from './components/TeamList/reducers';

// All defined reducers
const reducers = {
    isLoading,
    teamList
};

// Create root reducer - put reducers in form that we can pass to createStore
const rootReducer = combineReducers(reducers);

// Returns createStore with rootReducer
export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));