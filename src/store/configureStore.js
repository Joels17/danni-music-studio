import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import notesReducer from '../reducers/notesReducer';
import filtersReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
