// Configure Redux store
import { createStore, combineReducers } from 'redux';
import { teamList } from './components/TeamList/reducers';

// All defined reducers
const reducers = {
    teamList
};

// Create root reducer - put reducers in form that we can pass to createStore
const rootReducer = combineReducers(reducers);

// Returns createStore with rootReducer
export const configureStore = () => createStore(rootReducer);