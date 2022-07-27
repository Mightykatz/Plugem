import Share from "../share/Share"
import "./feedbar.css"

export default function Feedbar(){
    return(
        <div className="feedbar">
            <div className="feedWrapper">
                <Share/>
            </div>
        </div>
    )
}