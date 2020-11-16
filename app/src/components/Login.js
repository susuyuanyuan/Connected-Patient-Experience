import React from 'react';

const Login = props => {
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
                <div>
                    <button
                        onClick={() => {
                            props.history.push('/');
                        }}>
                        Login
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Login;