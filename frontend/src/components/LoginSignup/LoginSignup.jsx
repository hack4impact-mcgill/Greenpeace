import React,{ useState } from "react";
import './LoginSignup.css'
import { TextField, Button } from "@material-ui/core/"

const LoginSignup =  () => {

    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSignup = () => {
        // console.log(email);
        // console.log(password); 
        setEmail('');
        setPassword('');
    };


    return (
        <div className="container">
            <div className="header">
                
            </div>    
            <div className="inputs">
                <div className="input">
                    <TextField fullWidth id="email-input" label="Email" variant="outlined" 
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input">
                    <TextField fullWidth id="password-input" label="Password" variant="outlined" 
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>

            <div className="submit-container">
                {action==="Login"?
                    <div className="submit">
                        <Button fullWidth variant="contained" color="primary" disableElevation
                        onClick={handleLoginSignup}>
                            LOG IN         
                        </Button>
                    </div>:
                    <div className="submit">
                        <Button fullWidth variant="contained" color="primary" disableElevation
                        onClick={handleLoginSignup}>
                            SIGN UP           
                        </Button>
                    </div>
                }


            </div>
            
            { action==="Login"?
                <div className="login" onClick={()=> {setAction("Sign Up")}}>or <span>Sign Up</span></div>:
                <div className="login" onClick={()=> {setAction("Login")}}>or <span>Log In</span></div>
            }

        </div>
    )
}

export default LoginSignup