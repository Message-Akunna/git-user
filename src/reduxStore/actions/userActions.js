import * as types from '../types';
import axios from 'axios';

export const getUser = (name, success, failed) => (dispatch, getState) => {
    if (!navigator.onLine) {
        return;
    }
    dispatch(setUserLoading());
    axios.get(`https://my-github-profile.000webhostapp.com/git-user.php?name=${name}`)
    .then((response) =>{
        dispatch({
            type: types.GET_USER,
            payload: (response?.data && response?.data?.success === true)
                ? JSON.parse(response?.data?.data) 
                : null
            
        })
        success && success(response?.response?.data);
    }).catch((error) =>{
        dispatch({
            type: types.GET_USER,
            payload: null
        });
        failed && failed(error?.response?.data);
    });     
}

// 
export const setUserLoading = () => {
    return {type: types.USER_LOADING}
}