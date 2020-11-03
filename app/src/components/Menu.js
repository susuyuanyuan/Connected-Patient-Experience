import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu-container">
            <header className="header">
                <div>
                    <i className="fas fa-sun" style={{ "color": "#f5a25d" }}></i>
                    <p className="headerText">&nbsp;A Professional Medical Team make you smile like sunshine</p>
                </div>
                <h1>Sunshine Clinics</h1>
            </header>
            <main className="main">
                <div>
                    <button className="menu-button">
                        <i className="fas fa-user-md" style={{ "color": "#0e918c" }}></i>
                        &nbsp;Select Doctor
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i className="fas fa-mail-bulk" style={{ "color": "#0e918c" }}></i>
                        &nbsp;Messages
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <Link to="../lab" style={{ "color": "#f1f6f9" }}>
                            <i className="fas fa-vial" style={{ "color": "#0e918c" }}></i>
                            &nbsp;View Lab Results
                        </Link>
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i className="fas fa-capsules" style={{ "color": "#0e918c" }}></i>
                        &nbsp;Pharmacy
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i className="fas fa-book-medical" style={{ "color": "#0e918c" }}></i>
                        &nbsp;Medical Records
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Menu;