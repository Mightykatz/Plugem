import "./post.css"
import {MoreVert} from "@mui/icons-material"
/*step 3 ,take in the post as parameter*/

/*step 4 fetch all the users and filter them*/
import {Users} from "../../dummyData"

export default function Post({post}){
    return(
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        
                        {/*each profile must correspond to the correct user,ie the user id's are equal*/ }
                        <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                        
                        {/*each post must correspond to the correct user,ie the user id's are equal*/ }
                        <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>                    
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                     {/*put question mark cuz some post do not have description*/}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <span className="postLikeCounter">{post.like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}