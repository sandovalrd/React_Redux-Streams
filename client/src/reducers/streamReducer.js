import _ from 'lodash'; // npm install --save lodash
import {
    CREATE_STREAM,
    FECTH_STREAMS,
    FECTH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../accions/types';

export default (state = {}, action) =>{
    switch (action.type){
        case FECTH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FECTH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
                return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};