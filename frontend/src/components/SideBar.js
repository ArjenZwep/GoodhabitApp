import { FaClipboardCheck, FaComment, FaUserFriends } from 'react-icons/fa';

const SideBar = () => {
    return(
        <div className="fixed top-0 h-screen w-16 m-0
                        flex flex-col
                        bg-secondary text-white shadow-lg">
        <SideBarIcon icon={ <FaClipboardCheck size="32"/>} text = {'My habits'}/>
        <SideBarIcon icon={ <FaComment size="32"/> } text = {'My comments'}/>
        <SideBarIcon icon={ <FaUserFriends size="32"/> } text = {'Comunnities'}/>
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:bg-white">
            {text}
        </span>
    </div>
);

export default SideBar