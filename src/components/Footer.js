import "./Components.css";

const Footer = (props) => {

    return(
        <div className="container-fluid w-100  qd-main-footer">
            <div className="row">
                <div className="d-flex justify-content-around align-items-center flex-row">
                    <blockquote className="blockquote text-center">
                        <p className="mb-0 text-dark"> ContactApp </p>
                        <footer className="blockquote-footer text-secondary">React Redux & Redux & Redux-Thunk & React & React-Router-Dom & React Boostrap </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Footer;
