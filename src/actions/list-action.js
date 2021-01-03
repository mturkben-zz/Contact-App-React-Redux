export const SHOW_READ_ONLY = "SHOW_READY_ONLY";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const GET_DATA = "GET_DATA";

export const getData = data => {
    return {
        type: GET_DATA,
        payload: data
    }
}

export const addContact = data => {
    return {
        type: ADD_CONTACT,
        payload: data
    }
}

export const showReadyOnly = data => {
    return {
        type: SHOW_READ_ONLY,
        payload: data ? true : false
    }
}

export const updateUser = data => {
    return {
        type: UPDATE_CONTACT,
        payload: data
    }
}

export const deleteData = data => {
    return {
        type: DELETE_CONTACT,
        payload: Number(data)
    }
}