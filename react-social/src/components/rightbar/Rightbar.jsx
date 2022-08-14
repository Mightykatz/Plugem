import "./rightbar.css"

import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () =>{

        return(
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
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className="righbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rifgbarInfoValue">Braamfontein</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rifgbarInfoValue">Cape town</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rifgbarInfoValue">Talkin Stage..</span>
                </div>
            </div>
            <h4 className="righbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/1.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/2.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/3.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/4.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/5.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src={`${PF}person/6.jpg`} alt="" />
                    <span className="rightbarFollowingName">Marrium Jones</span>
                </div>
            </div>
            </>
        )
    }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}