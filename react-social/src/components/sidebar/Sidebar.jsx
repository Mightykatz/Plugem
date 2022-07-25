import "./sidebar.css"
import { Feed,Chat,Group,Bookmark,Help,Event,School,Work } from "@mui/icons-material"

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Feed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon"/>
                        <span className="sidebarListItemText">Help</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">jobs</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Emma Johnson</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mbali scott</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/4.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jeffery Basoni</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Michael Kgomu</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/6.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Hugh Mahlangu</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/7.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">50 cent</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}