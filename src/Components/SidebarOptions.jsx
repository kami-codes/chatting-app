import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { addDoc, collection, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { setRoomId, setRoomName } from "../redux/appSlice";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


function SidebarOptions({selectChannel,id,logout, avatar, Icon, text, channelName, addChanel }) {
  const [isOpen, setIsOpen] = useState(false);
  const [channelInput, setChannelInput] = useState('')

  const [user, loading, error] = useAuthState(auth);

const dispatch = useDispatch()

  const handleClick = () => {
    if (addChanel) {
      setIsOpen(true);
    }
    if(selectChannel){
      dispatch(setRoomId(id))
      dispatch(setRoomName(channelName))
    }
    if(logout){
      signOut(auth)
    }
  };
  const roomRef = collection(db, "Rooms")

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(channelInput.length >= 2){
      const data = await addDoc(roomRef, {name: channelInput})
      const roomId = data.id
      const documentRef = doc(db, "Rooms", roomId)
      const messageRef = collection(documentRef, "messages")
      const msgData = await addDoc(messageRef, {})
      setIsOpen(false)
      setChannelInput("")
    }
    
  };

  const closeInput = (e) => {
    e.stopPropagation()
    setIsOpen(false);
    setChannelInput("")
  };

  return (
    <SidebarOptionContainer onClick={handleClick}>
      {avatar && (
        <AvatarContainer>
          <AvatarStyled src={user?.photoURL}/>
          <UserInfo>
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
          </UserInfo>
        </AvatarContainer>
      )}
      {Icon && (
        <InboxContainer>
          <Icon />
          <p> {text} </p>
        </InboxContainer>
      )}
      {channelName && (
        <InboxContainer>
          <TagRoundedIcon />
          <p>{channelName}</p>
        </InboxContainer>
      )}
      {isOpen && (
        <AddChannelInput>
          <form onSubmit={handleSubmit}>
            <input value={channelInput} onChange={(e)=>{setChannelInput(e.target.value)}} type="text" placeholder="channel-name" />
            <IconButton type="submit" disabled={channelInput.length < 2}>
              <EastRoundedIcon  />
            </IconButton>
            <IconButton onClick={closeInput}>
              <CloseRoundedIcon />
            </IconButton>
          </form>
        </AddChannelInput>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOptions;

const SidebarOptionContainer = styled.div`
  margin-bottom: 5px;

  :hover {
    background-color: #5a015a;
  }
`;
const AvatarStyled = styled(Avatar)`
  width: 50px !important;
  height: 50px !important;
  object-fit: contain;
`;
const AvatarContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;
`;
const UserInfo = styled.div`
  > h2 {
    font-weight: 500;
    font-size: 23px;
  }
  > p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
  }
`;
const InboxContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 5px 20px;

  > p {
    font-weight: 500;
  }
`;

const AddChannelInput = styled.div`
  padding: 0px 20px;
  display: flex;
  gap: 10px;

  > form > input {
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    padding: 2px;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
  > form > input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  > form > .MuiButtonBase-root > .MuiSvgIcon-root {
    color: white !important;
  }
`