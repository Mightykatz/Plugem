import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { useState,useEffect } from "react"
import axios from "axios"
import  {format} from "timeago.js"

export default function Post({post}){
    /*initial state is goin to be whatever number the post is set to initialy in the class*/ 
    const [like,setLike] = useState(post.likes.length)
    const [isliked,setIsLiked] = useState(false)
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{

        const fetchUser = async()=> {
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        };
        fetchUser ();
    },[])

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
                        <img className="postProfileImg" src={user.profilePicture || PF+"person/noavatar.png " } alt="" />
                        
                        {/*each post must correspond to the correct user,ie the user id's are equal*/ }
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>                    
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                     {/*put question mark cuz some post do not have description*/}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
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