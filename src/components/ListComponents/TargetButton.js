import {useState} from "react";

const TargetButton = (props) => {
    console.log(props);
    const [showEdit , setShowEdit] = useState(false);

    const showTargetEdit = () => {
        props.listReducers.showReadOnly === true ? props.onShowReadOnly(false) : props.onShowReadOnly(true)
        showEdit === false ? setShowEdit(true) : setShowEdit(false);
    }
    return (
        <span className="d-flex justify-content-between align-items-center">
            {
                showEdit ? 
                <span>
                    <input type="button" onClick={() => showTargetEdit()} className="btn btn-outline-warning" value="CANCEL"/>
                    <input type="button" className="btn btn-outline-success" value="UPDATE"/>
                </span>
                :
                <input type="button" onClick={() => showTargetEdit()} className="btn btn-outline-info" value="EDİT"/>
            }
            <input type="button" className="btn btn-outline-danger " value="DELETE"/>
        </span>
    )
}

export default TargetButton;
