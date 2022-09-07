import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="#">Faculty Details</a> */}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={require('./logo.png')} alt="" width="40" height="30" class="d-inline-block align-text-top" />
                        &nbsp;Student Management
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ">
                        <li className="nav-item active url1">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item url1">
                            <Link to="/allstudents" className="nav-link">
                                Students
                            </Link>
                        </li>

                        <li className="nav-item url1">
                            <Link to="/addstudent" className="nav-link">
                                About
                            </Link>
                        </li>

                        <li className="nav-item url1">
                            <Link to="/addstudent" className="nav-link">
                                Contact Us
                            </Link>
                        </li>

                        <li className="nav-item url1">
                            <Link to="/addstudent" className="nav-link">
                                <button className="btn btn-outline-success btn-sm ">Add</button>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Header;