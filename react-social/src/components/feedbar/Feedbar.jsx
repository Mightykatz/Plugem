import { useEffect } from "react";
import { useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feedbar.css"
import axios from "axios"


export default function Feedbar(){

    const [posts,setposts] = useState([]);
    
    useEffect(()=>{

        const fetchPosts = async()=> {
            const res = await axios.get("posts/timeline/62dd6e9362b28bb186217782");
            setposts(res.data);
            //consol.log(res);
        };
        fetchPosts();
    },[])


    return(
        <div className="feedbar">
            <div className="feedWrapper">
                <Share/>
                {posts.map(p=>
                //name of map is p and key is id value is the rest of the string contents
                    <Post key={p._id} post={p}/>
                )}
            </div>
        </div>
    )
}