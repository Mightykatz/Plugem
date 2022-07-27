import "./share.css"
import {PermMedia,Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/10.jpeg" alt="" className="shareProfileImg" />
                    <input 
                    placeholder="What are You thinkin about..?"
                    className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Video or Photo</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                            <span className="shareOptionText">Mood</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}