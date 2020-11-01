import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Welcome to Sunshine Clinics</h1>
            </header>
            <div className="main">
                <div>
                    <label>
                        username:
                        <input
                            type="text"
                            placeholder="Letters only"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        password:
                        <input
                            type="text"
                            placeholder="Enter password"
                        />
                    </label>
                </div>
                <form>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;