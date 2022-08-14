import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feedbar/Feedbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF }post/3.jpg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/10.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Katlego Masemene</h4>
                            <span className="profileInfoDesc">W'ssup Y'all</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feedbar/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}