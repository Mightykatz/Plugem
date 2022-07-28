import "./rightbar.css"

import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Carter </b>and <b>3 other friends </b>have a brithday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">online friends</h4>
                <ul className="rightbarFriendlist">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>            
            </div>
        </div>
    )
}