import * as Actions from '../actions';

const initialState ={
    data:[],
    loading:true,
    posted:null
};

const companyReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_COMPANY_DETAIL:
           return {
               ...state,
               data:action.payload,
               loading:false
           }
        case Actions.POST_COMPANY_DETAIL:
            return {
                ...state,
                data:[action.payload, ...state.data],
                posted:true
            }   
        default:
            return state;
    }
};

export default companyReducer;
