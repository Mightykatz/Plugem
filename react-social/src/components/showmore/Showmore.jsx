import "./showmore.css"

/*note that the parameter is taken with the parameter*/ 
export default function Showmore({user}){
    return(
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}