import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            home: "nav-item active li-header",
            portfolio: "nav-item li-header",
            contact: "nav-item li-header"
        }
    }
    render() {

        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className={this.state.home}>
                                <Link to="/" className="nav-link" 
                                onClick={() => this.setState({ home:"nav-item active", portfolio: "nav-item", contact: "nav-item" })}
                                >Home</Link>
                            </li>
                            <li className={this.state.portfolio}>
                                <Link to="/portfolio" className="nav-link"
                                onClick={() => this.setState({ home:"nav-item", portfolio: "nav-item active", contact: "nav-item"})}
                                >Portfolio</Link>
                            </li>
                            <li className={this.state.contact}>
                                <Link to="/contact" className="nav-link"
                                onClick={() => this.setState({ home:"nav-item", portfolio:"nav-item", contact:"nav-item active"})}
                                >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Header;