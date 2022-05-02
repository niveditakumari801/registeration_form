import React, { useState } from "react";

import Home from "./Home";

function Login() {
    //     const initialValue = { firstName: "", lastName: "", email: "", password: "", number: "", gender: "", description: "", country: "" }
    //   const [formValue, setFormValue] = useState(initialValue);
    const [emails, setEmails] = useState(" ");
    const [passwords, setPasswords] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let password = localStorage
            .getItem("email")
            .replace(/"/g, "");
        let email = localStorage.getItem("password").replace(/"/g, "");


        if (!emails || !passwords) {
            setFlag(true);
            console.log("EMPTY");
        } else if (emails !== password || passwords !== email) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <h3>LogIn</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmails(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPasswords(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn ">
                        Login
                    </button>


                </form>
            ) : (
                <Home />
            )}
        </div>
    );
}

export default Login;



