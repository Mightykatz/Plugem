import { Users } from "../../dummyData"
import "./online.css"

export default function Online({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div>
            <li className="rightbarFiend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" src={PF + user.profilePicture} alt="" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">{user.username}</span>
            </li>
        </div>
    )
}