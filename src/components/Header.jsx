import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

export default function Header(){
    return (
        <header id="main-header"> 
            <div id="title">
                <img src={logoImg} alt="A restaurant"/>
                <h1>Foodilie</h1>
            </div>
            <nav>
                <Link to="/about-us">About Us</Link>
                <span className="nav-separator"></span> {/* Add a span with class for spacing */}
                <Link to="/contact-us">Contact Us</Link> {/* Add Contact Us Link */}
            </nav>
            <style>
                {`
                    .nav-separator {
                        margin: 0 10px; /* Adjust the margin as needed */
                    }
                `}
            </style>
        </header>
    );
}
