import "./rightbar.css"

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
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Theadore Bagwell</span>
                    </li> 
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/8.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Damon Salvator</span>
                    </li>
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/6.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Wakanda King</span>
                    </li>
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/2.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Lizzy Whittaker</span>
                    </li>
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/9.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Stiles Stilinskie</span>
                    </li>
                    <li className="rightbarFiend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/7.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Swagger Givenchy</span>
                    </li>
                </ul>            
            </div>
        </div>
    )
}