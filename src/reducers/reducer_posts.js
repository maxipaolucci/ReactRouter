import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions"; //don't need to specify the file beacuse it is stored in the index.js one
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return { newState }

      return { ...state, [action.payload.data.id]: action.payload.data }; //this is the same as cthe 4 lines above. [id] is adding a key (postId) to the returned object
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
