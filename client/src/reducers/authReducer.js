import { SIGN_IN, SIGN_OUT } from '../accions/types';

const INICIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state=INICIAL_STATE, action) => {
    switch (action.type){
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null};
        default:
            return state;
    };
};

