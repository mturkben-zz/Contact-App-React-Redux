

const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-dark bg-primary w-100 d-flex justify-content-around align-items-center flex-row">
                    <a className="navbar-brand" href="/">ContactApp</a>
                    <ul className="navbar-nav d-flex justify-content-center align-items-center flex-row">
                        <li className="nav-item px-2 m-2">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item px-2 m-2">
                            <a className="nav-link active" href="/add">Add</a>
                        </li>
                        <li className="nav-item px-2 m-2">
                            <a className="nav-link active" href="/list">List</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
