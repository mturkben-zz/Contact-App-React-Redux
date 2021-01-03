
import {useState} from "react";
import {connect} from 'react-redux';

import {addContact} from "../actions/list-action";


import { Modal } from 'react-bootstrap';

const AddContact = (props) => {
    // MODAL BOOSTRAP
    const [show, setShow] = useState(false);

    //ADD DATA
    const [getNameData, setNameData] = useState("");
    const [getPhoneNumberData, setPhoneNumberData] = useState("");
    const [getHomeNumberData, setHomeNumberData] = useState("");
    const [getID, setID] = useState(0);
    const [showError, setShowError] = useState(false);

    const addContact = (e) => {
        e.preventDefault();
        if(getNameData=== "" || getPhoneNumberData==="" || getHomeNumberData==="") {
            setShowError(true);
            return false;
        }
        const composeData = {
            id:getID,
            name:getNameData,
            phone_number:getPhoneNumberData,
            home_number:getHomeNumberData
        }
        props.onAddContact(composeData);
        setID(getID + 1);
        setShow(true);
    }
    return(
        <div className="mt-4 container qd-main-container shadow rounded">
            <div className="row d-flex justify-content-center align-items-center flex-column">
                <h2 className="mt-3">Add New Contact</h2>
                <hr className="col-8"/>
                <div className="col-6 mt-5">
                <form className="shadow-sm p-3 mb-5 rounded">
                    <div className="form-row">
                        {
                            showError ? 
                            <div className="form-group col-12">
                                <div className="alert alert-warning alert-dismissible fade show d-flex justify-content-center align-items-center">
                                    <strong> Tüm Alanların Dolu Olması Gerekmektedir.</strong>
                                    <input type="button" value="X" onClick={() => setShowError(false)} className="btn btn-danger"/>
                                </div>
                            </div>
                            : null
                        }
                        <div className="form-group col-md-12 col-lg-6">
                            <label>Name</label>
                            <input type="text" className="form-control bg-light" value={getNameData} onChange={(e) => setNameData(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-12 col-lg-6">
                            <label>Phone Number</label>
                            <input type="text" className="form-control bg-light" value={getPhoneNumberData} onChange={(e) => setPhoneNumberData(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-12 col-lg-12">
                            <label>Home Phone Number</label>
                            <input type="text" className="form-control bg-light" value={getHomeNumberData} onChange={(e) => setHomeNumberData(e.target.value)}/>
                        </div>
                        <div className="form-group col-12">
                            <input type="submit" onClick={(e) => addContact(e)}className="btn btn-outline-primary btn-block"/>
                        </div>
                    </div>
                </form>
                </div>
            </div>

            <Modal size="sm" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize:"16px"}}>Succesfuly Added Contact</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onAddContact:addContact
}

export default connect(mapStateToProps,mapDispatchToProps)(AddContact);
