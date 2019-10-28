
import jwtService from 'app/services/jwtService';
import {setUserData} from './user.actions';
import * as Actions from 'app/store/actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_SUCCESS_CREATOR='LOGIN_SUCCESS_CREATOR';
export const LOGIN_SUCCESS_CANDIDATE='LOGIN_SUCCESS_CANDIDATE';

export function submitLogin({email, password})
{
    return (dispatch) =>
        jwtService.signInWithEmailAndPasswordSuper(email, password)
            .then((user) => {
                    dispatch(setUserData(user));

                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}
export function submitLoginWithCreator({email, password})
{
    console.log("iam hr ",email ,password);
    return (dispatch) =>
        jwtService.signInWithEmailAndPasswordCreator(email, password)
            .then((user) => {
                    dispatch(setUserData(user));

                    return dispatch({
                        type: LOGIN_SUCCESS_CREATOR
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}

export function submitLoginWithCandidate({email, password})
{
    return (dispatch) =>
        jwtService.signInWithEmailAndPasswordCandidate(email, password)
            .then((user) => {
                    dispatch(setUserData(user));

                    return dispatch({
                        type: LOGIN_SUCCESS_CANDIDATE
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}


