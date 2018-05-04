import { FETCH_POSTS } from '../actions'; //don't need to specify the file beacuse it is stored in the index.js one
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            
        default: 
            return state;
    }
}