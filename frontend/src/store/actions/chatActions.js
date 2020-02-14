import {GET_MESSAGES_SUCCESS, SWITCH_MODAL_STATE} from "./actionTypes";
import {axiosApp} from "../../axios-app";

export const getMessagesSuccess = messages => ({type: GET_MESSAGES_SUCCESS, messages});
export const switchModalState = () => ({type: SWITCH_MODAL_STATE});

export const getMessages = () => {
    return async (dispatch) => {
        const response = await axiosApp('/messages');
        dispatch(getMessagesSuccess(response.data));
    }
};

export const postMessage = message => {
    return async (dispatch) => {
     await axiosApp.post('/messages', message);
     dispatch(getMessages());
    }
};