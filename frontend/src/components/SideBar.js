import { FaClipboardCheck, FaComment, FaUserFriends, FaSignInAlt } from 'react-icons/fa';

const SideBar = () => {
    return(
        <div className='flex flex-col h-screen'>
            <div className="h-16 border-b-1 p-4 bg-third text-white shadow-lg flex flex-col">
                <h1 className="font-bold text-2xl text-opacity-20 text-center">
                    Good habit app
                </h1>
            </div>
            <div className="w-16
                        flex flex-1 flex-col
                        bg-secondary text-white shadow-lg">
            <SideBarIcon icon={ <FaSignInAlt size="32"/>} text = {'Loging'}/>
            <SideBarIcon icon={ <FaClipboardCheck size="32"/>} text = {'My habits'}/>
            <SideBarIcon icon={ <FaComment size="32"/> } text = {'My comments'}/>
            <SideBarIcon icon={ <FaUserFriends size="32"/> } text = {'Comunnities'}/>
            </div>
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:bg-yellow opacity-100">
            {text}
        </span>
    </div>
);

export default SideBar