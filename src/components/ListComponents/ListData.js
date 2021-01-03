import { connect } from "react-redux";

import { useState } from "react";
import {showReadyOnly,updateUser,deleteData,} from "../../actions/list-action";

import { Modal } from 'react-bootstrap';
const ListData = (props) => {
  // MODAL BOOSTRAP
  const [showUpdate, setShowUpdate] = useState(false);
  const [show, setShow] = useState(false);

  // Control  EDIT Button
  const [showEdit, setShowEdit] = useState(false);
  const [controlInput, setControlInput] = useState("disabled");
  const showTargetEdit = () => {
    props.listReducers.showReadOnly
      ? setControlInput("")
      : setControlInput("disabled");
    props.listReducers.showReadOnly === true
      ? props.onShowReadOnly(false)
      : props.onShowReadOnly(true);
    showEdit === false ? setShowEdit(true) : setShowEdit(false);
  };

  // Update Function
  const [getDataName, setDataName] = useState(props.data.name);
  const [getDataPhoneNumber, setDataPhoneNumber] = useState(
    props.data.phone_number
  );
  const [getDataHomeNumber, setDataHomeNumber] = useState(
    props.data.home_number
  );
  const updateOnData = (e) => {
    e.preventDefault();

    const id = Number(e.target.id);
    const composeData = {
      id: id,
      name: getDataName,
      phone_number: getDataPhoneNumber,
      home_number: getDataHomeNumber,
    };
    props.onUpdateUser(composeData);
    setShowUpdate(true);
  };

  // DELETE BUTTON
  const deleteContact = (e, id) => {
    e.preventDefault();
    setShow(true);
    props.onDeleteData(id);
  };

  return (
    <form className="shadow-sm p-3 mb-5 rounded">
      <div className="form-row">
        <div className="form-group col-md-12 col-lg-6">
          <label> Name </label>
          <input type="text" className="form-control" disabled={controlInput} value={getDataName} onChange={(e) => setDataName(e.target.value)} placeholder={props.data.name}/>
        </div>
        <div className="form-group col-md-12 col-lg-6">
          <label> Phone Number </label>
          <input type="text" className="form-control" disabled={controlInput} value={getDataPhoneNumber} onChange={(e) => setDataPhoneNumber(e.target.value)} placeholder={props.data.phone_number}/>
        </div>
        <div className="form-group col-12">
          <label> Home Number </label>
          <input type="text" className="form-control" disabled={controlInput} value={getDataHomeNumber} onChange={(e) => setDataHomeNumber(e.target.value)} placeholder={props.data.home_number}/>
        </div>
        <div className="form-group col-12">
          <span className="d-flex justify-content-between align-items-center">
            {showEdit ? 
              <span>
                <input type="submit" onClick={() => showTargetEdit()} className="btn btn-outline-warning" value="CANCEL"/>
                <input type="submit" id={props.data.id} onClick={(e) => updateOnData(e)} className="btn btn-outline-success" value="UPDATE"/>
              </span>
                :
              <input type="submit" onClick={() => showTargetEdit()} className="btn btn-outline-info" value="EDIT"/>
            }
            <input type="submit" onClick={(e) => deleteContact(e, props.data.id)} className="btn btn-outline-danger" value="DELETE"/>
          </span>
        </div>
      </div>
      
      <Modal size="sm" show={showUpdate} onHide={() => setShowUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"16px"}}>Succesfuly Updated Contact</Modal.Title>
        </Modal.Header>
      </Modal>
      <Modal size="sm" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"16px"}}>Succesfuly Deleted Contact</Modal.Title>
        </Modal.Header>
      </Modal>
    </form>
  );
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  onShowReadOnly: showReadyOnly,
  onUpdateUser: updateUser,
  onDeleteData: deleteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
