import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tagListReducer from './reducers/tagList'
export default createStore(combineReducers({
  tagList: tagListReducer
}), applyMiddleware(thunk))