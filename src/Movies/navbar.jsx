import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <nav className="navbar-nav d-flex">

            <Link className="nav-link" to="/">YourMovies</Link>
            <div className="d-flex gap-5">
                <Link className="nav-link" to="/movies">Tous</Link>
                <Link className="nav-link" to="/watchlist">Watchlist</Link>
                <Link className="nav-link" to="/liked">liked</Link>
            </div>
        </nav>
    )
}