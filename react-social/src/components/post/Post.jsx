import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post(){
    return(
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/10.jpeg" alt="" />
                        <span className="postUserName">Katlego Masemene</span>
                        <span className="postDate">47 mins ago</span>                    
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Chexck out my Post y'all</span>
                    <img className="postImg" src="/assets/post/6.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <span className="postLikeCounter">120 people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">52 comments</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}