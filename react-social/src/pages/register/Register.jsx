import "./register.css"

export default function Register() {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Katlego's Social</h3>
                    <span className="loginDesc">
                        Plug with friends and Foes aroun the Globe on Plug'Em
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button> 
                        Log Into Your Account                       
                    </div>
                </div>
            </div>
        </div>
    )
}