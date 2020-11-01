import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Sunshine Clinics</h1>
            </header>
            <main className="main">
                <div>
                    <button className="menu-button">
                        <i class="fas fa-user-md"></i>
                        &nbsp;Select Doctor
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i class="fas fa-mail-bulk"></i>
                        &nbsp;Messages
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <Link to="/lab">
                            <i class="fas fa-vial"></i>
                            &nbsp;View Lab Results
                        </Link>
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i class="fas fa-capsules"></i>
                        &nbsp;Pharmacy
                    </button>
                </div>
                <div>
                    <button className="menu-button">
                        <i class="fas fa-book-medical"></i>
                        &nbsp;Medical Records
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Menu;