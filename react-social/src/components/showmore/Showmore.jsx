import "./showmore.css"

/*note that the parameter is taken with the curly brackets*/ 
export default function Showmore({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <li className="sidebarFriend">
            <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}