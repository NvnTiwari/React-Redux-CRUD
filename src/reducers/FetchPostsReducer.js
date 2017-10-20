import {FETCH_DATA, FETCH_POST, DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_DATA:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data};
    };
    return state;
}