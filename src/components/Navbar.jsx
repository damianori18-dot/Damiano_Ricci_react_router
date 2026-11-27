import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import useScroll from "../hooks/useScroll.js";

export default function Navbar() {
    const { user } = useContext(UserContext);
    const [scrolled, scrollY] = useScroll()

    return (

        <nav ref={scrolled} className={`navbar navbar-expand-lg nav-cus p-3 ${scrollY > 0 ? 'nav-scroll' : 'nav-0'}`}  data-bs-theme='dark'>
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand color-p crimson-text-bold">React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link" aria-current="page">Home</Link>
                        </li>
                        {(user) && (
                            <li className="nav-item">
                                <Link to={'/posts'} className="nav-link">Posts</Link>
                            </li>
                        )}

                        <li className="nav-item">
                            <Link to={'/albums'} className="nav-link">Albums</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                        {(!user) && (
                            <li className="nav-item">
                                <Link to={'/register'} className="nav-link">Register</Link>
                            </li>
                        ) || (
                                <li className="nav-item">
                                    <span className="nav-link">Ciao {user.name}</span>
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}