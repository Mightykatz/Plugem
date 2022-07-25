import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feedbar/Feedbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"


export default function Home() {
    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feedbar/>
                <Rightbar/>
            </div>
        </>
    )
}