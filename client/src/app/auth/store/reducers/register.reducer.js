import * as Actions from '../actions';

const initialState = {
    success: false,
    error  : {
        username: null,
        password: null
    }
};

const register = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.REGISTER_SUCCESS:
        case Actions.REGISTER_SUCCESS_CREATOR:
        case Actions.REGISTER_SUCCESS_CANDIDATE:
        {
            return {
                ...initialState,
                success: true
            };
        }
        case Actions.REGISTER_ERROR:
        {
            return {
                success: false,
                error  : action.payload
            };
        }
        default:
        {
            return state
        }
    }
};

export default register;