import { Users } from "../../dummyData"
import "./online.css"

export default function Online({user}){
    return(
        <div>
            <li className="rightbarFiend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">{user.username}</span>
            </li>
        </div>
    )
}