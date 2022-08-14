import "./post.css"
import {MoreVert} from "@mui/icons-material"

import {Users} from "../../dummyData"
import { useState } from "react"

export default function Post({post}){
    /*initial state is goin to be whatever number the post is set to initialy in the class*/ 
    const [like,setLike] = useState(post.like)
    const [isliked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler =()=>{
        {/*if it isliked===true subtract one else add one */}
        setLike(isliked ? like-1 : like+1)

        /*initially isliked is false thus we take like+1,after clicking we make it true(opposite), 
        them in the setLike method isLiked will be true and return like-1
        */
        setIsLiked(!isliked)
    }
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
                    <img className="postImg" src={PF + post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}heart.png`} alt="" />
                        <img className="likeIcon" onClick={likeHandler} src={`${PF}like.png`} alt="" />
                        <span className="postLikeCounter">{like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}