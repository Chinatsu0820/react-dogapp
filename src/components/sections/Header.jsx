import React from "react";
import "./Header.css";
import navImg from "../../imgs/site-logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
           <nav>
            <section className="nav-title">
                <img className="nav-img" src={navImg} />
                <p>PupView</p>
            </section>
            <div><Link className='link-home' to="/">HOME</Link></div>
           </nav>

           <h1>PupView</h1>
           <p>Exploring Canine Diversity</p>

        </header>
    )
}