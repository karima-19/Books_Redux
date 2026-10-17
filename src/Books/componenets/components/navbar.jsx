import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <nav className="navbar-nav">
            <div className=" d-flex">
                <Link className="nav-link" to="/">YourBooks</Link>
                <div className="d-flex gap-5">
                    <Link className="nav-link" to="/books">Tous</Link>
                    <Link className="nav-link" to="/inReadingList">inReadingList</Link>
                    <Link className="nav-link" to="/likedBooks">liked</Link>
                </div>
            </div>
        </nav>
    )
}