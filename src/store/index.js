import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tagListReducer from './reducers/tagList'
import AppReducer from './reducers/app'
export default createStore(combineReducers({
  tagList: tagListReducer,
  app: AppReducer

}), applyMiddleware(thunk))