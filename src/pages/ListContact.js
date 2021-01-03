import {useEffect ,useState} from "react";
import {connect} from 'react-redux';

import "./AllPages.css";

import ListData from "../components/ListComponents/ListData";


const ListContact = (props) => {
    // Then Contact list check is equal Zero
    const [emptyData , setEmptyData] = useState(false);
    useEffect(() => {
        if(props.listReducers.contact.length === 0){
            setEmptyData(true);
        } else {setEmptyData(false)}
    }, [props.listReducers.contact])

    return(
        <div className="mt-4 container qd-main-container shadow rounded">
            <div className="row d-flex justify-content-center align-items-center flex-column">
                <h2 className="mt-3">Contact List</h2>
                <hr className="col-8"/>
                <div className="col-6 mt-5">
                    {
                        emptyData ? <h3 className="d-flex justify-content-center align-items-center"> No Contact Data</h3> 
                        :
                        props.listReducers.contact.map((contact,key) => {
                            return <ListData data={contact} key={key}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => state;


export default connect(mapStateToProps)(ListContact)
