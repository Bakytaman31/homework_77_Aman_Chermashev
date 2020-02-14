import {GET_MESSAGES_SUCCESS, SWITCH_MODAL_STATE} from "../actions/actionTypes";

const initialState = {
    messages: [],
    modal: false
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        case SWITCH_MODAL_STATE:
            return {
                ...state,
                modal: !state.modal
            }
        default:
            return state;
    }
};

export default messagesReducer;