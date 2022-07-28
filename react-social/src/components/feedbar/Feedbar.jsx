import Post from "../post/Post"
import Share from "../share/Share"
import "./feedbar.css"
/*step 2*/
import {Posts} from "../../dummyData" 

export default function Feedbar(){
    return(
        <div className="feedbar">
            <div className="feedWrapper">
                <Share/>
                {Posts.map(p=>
                /*name of map is p and key is id value is the rest of the string contents*/ 
                    <Post key={p.id} post={p}/>
                )}
            </div>
        </div>
    )
}