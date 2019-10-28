import firebaseService from 'app/services/firebaseService';
import * as UserActions from './user.actions';
import * as Actions from 'app/store/actions';
import jwtService from 'app/services/jwtService';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_SUCCESS_CREATOR='REGISTER_SUCCESS_CREATOR';
export const REGISTER_SUCCESS_CANDIDATE='REGISTER)_SUCCESS_CANDIDATE';

export function submitRegister({displayName, password, email})
{
    console.log("reached here")
    return (dispatch) =>
        jwtService.createUserSuperAdmin({
            displayName,
            password,
            email
        }).then((user) => {
                    dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : REGISTER_ERROR,
                    payload: error
                });
            });
}

export function registerWithCreator({displayName, password, email,designation})
{
    console.log("reached here with the data"+designation);
    return (dispatch) =>
        jwtService.createUserCreator({
            displayName,
            password,
            email,
            designation
        }).then((user) => {
                    dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_SUCCESS_CREATOR
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : REGISTER_ERROR,
                    payload: error
                });
            });
}

export function registerWithCandidate({displayName, password, email})
{
  
    return (dispatch) =>
        jwtService.createUserCandidate({
            displayName,
            password,
            email
           
        }).then((user) => {
                    dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_SUCCESS_CANDIDATE
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : REGISTER_ERROR,
                    payload: error
                });
            });
}






