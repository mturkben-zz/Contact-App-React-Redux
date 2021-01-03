import {getData} from "../actions/list-action";

// Data Base
const defaultState = {
    contact: [],
    updatedContact: [],
    showReadOnly: true,
}
export default defaultState;

//GET DATA
export const fetchData = () => {
    return dispatch => {
        fetch("http://localhost:8080/contact",{
            method:"GET",
            headers: {
                accept: "application/json",
                "Contect-Type": "apllication/json"
            }
        }).then(res => res.json()).then(res => dispatch(getData(res)))
    }
}

// SEND DATA
export const sendData = data => {
    return fetch('http://localhost:8080/contact',{
        method: 'POST',
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
}

//UPDATE DATA
export const updateData = data => {
    return fetch(`http://localhost:8080/contact/${data.id}`,{
        method: 'PUT',
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json()).then((res)=>console.log("RES:",res)).catch((err)=>console.log("ERR:",err));

} 

//DELETE DATA
export const deleteData = data => {
    return fetch(`http://localhost:8080/contact/${data}`,{
        method: 'DELETE',
        headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res=>res.json()).then((res)=>console.log("RES:",res)).catch((err)=>console.log("ERR:",err));
} 