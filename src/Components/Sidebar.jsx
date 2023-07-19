import React from 'react'
import { styled } from 'styled-components'
import SidebarOptions from './SidebarOptions'
import InboxIcon from '@mui/icons-material/Inbox';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import { collection } from 'firebase/firestore';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  
 

  const roomRef = collection(db, "Rooms")
  const [rooms] = useCollection(roomRef)


  return (
    <SiderbarContainer>
      <SidebarOptions avatar={true} />
      <hr />
      <SidebarOptions Icon={InboxIcon} text={"Inbox"} />
      <SidebarOptions Icon={WidgetsIcon} text={"Widgets"} />
      <SidebarOptions Icon={GroupRoundedIcon} text={"Groups"}  />
      <SidebarOptions Icon={CollectionsRoundedIcon} text={"Gallery"} />
      <SidebarOptions Icon={StarBorderRoundedIcon} text={"Starred"}  />
      <hr />
      <SidebarOptions Icon={AddRoundedIcon} text={"Add Channel"} addChanel={true} />
     {rooms?.docs.map((doc)=>{
       return <SidebarOptions selectChannel={true} id={doc.id} key={doc.id} channelName={doc.data().name} />
     })}
<SidebarOptions Icon={LogoutRoundedIcon} logout={true} text={"Logout"}/>
    </SiderbarContainer>
  )
}

export default Sidebar

const SiderbarContainer = styled.div`
    flex: 0.2;
    background-color: purple;
    color: white;
    box-sizing: border-box;
    height: 100%;

    >hr{
        margin: 20px 0px;
        height: 0.1px;
        background-color: rgba(255,255,255,0.5);
        border: none;
    }
`
const LogOutButton = styled.div`
  
`
