// Action Names
import {SHOW_READ_ONLY,UPDATE_CONTACT,DELETE_CONTACT,ADD_CONTACT,GET_DATA} from "../actions/list-action";

// API Function
import defaultState , {sendData,updateData,deleteData} from "../api/database";

const listReducers = (state = defaultState,{type,payload}) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                contact: payload
            }
        case ADD_CONTACT:
            sendData(payload);
            return {
                ...state,
                contact: [...state.contact,payload]
            }
        case SHOW_READ_ONLY:
            return {
                ...state,
                showReadOnly: payload
            }
        case UPDATE_CONTACT:
            updateData(payload);
            return {
                ...state,
                updatedContact: [state.contact.map(target => target.id === payload.id ? payload : target)],
                contact: state.contact.map(target => target.id === payload.id ? payload : target)
            }
        case DELETE_CONTACT:
            deleteData(payload);
            return {
                ...state,
                contact: state.contact.filter(target => target.id !== payload)
            }
        default:
            return state
    }
}

export default listReducers;