import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //this handles a lot of funcionality for forms so we don't have to do it manually
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts : PostsReducer,
  form : formReducer //it is a must to assign this reducer to a key called "form"
});

export default rootReducer;
