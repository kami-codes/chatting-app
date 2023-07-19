import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import { IconButton, collapseClasses } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/firebase';
import { useSelector } from 'react-redux';
import { addDoc, collection, doc, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';

function Chat() {
  const [user, loading, error] = useAuthState(auth);
  const [msgTxt, setMsgTxt] = useState("")
  const roomId = useSelector((state)=> state.appRedux.roomId)
  const channelName = useSelector((state)=> state.appRedux.roomName)

  const docRef = doc(db, "Rooms", roomId)
  const messageRef =  collection(docRef, "messages")
  const q = query(messageRef, orderBy("time", "asc"))
  const [messages] = useCollection(q)
  
 

const handleSubmit = async(e)=>{
  e.preventDefault()
  if(msgTxt.length !== 0){
    
    const data = await addDoc(messageRef, {
      messageText: msgTxt,
      displayName: user.displayName,
      photo: user.photoURL,
      time: serverTimestamp()
    })
    setMsgTxt("")
  }
}

const ref = useRef(null)


useEffect(()=>{
  ref.current.scrollTop = ref.current.scrollHeight;

}, [messages])

  return (
    <ChatContainer>
      <ChatTop>
        <TagRoundedIcon />
        <h2> {channelName} </h2>
      </ChatTop>

      <ChatMiddle ref={ref}> 
      {messages?.docs.map((doc)=>{
        return <Message text={doc.data().messageText} id={doc.id} key={doc.id} name={doc.data().displayName} photo={doc.data().photo} msgDate={doc.data().time}/>
      })}
      <ChatEnd ref={ref}></ChatEnd>
      </ChatMiddle>

      <ChatInput>
        <form onSubmit={handleSubmit}>
        <input placeholder='type a message here' type="text" value={msgTxt} onChange={(e)=>{setMsgTxt(e.target.value)}} />
        <IconButton type='submit'>
        <SendRoundedIcon />
        </IconButton>
        </form>
      </ChatInput>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.8;
   box-sizing: border-box;
   position: relative;
   display: flex;
   flex-direction: column;
    /* Hide the scrollbar */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  
  /* WebKit browsers */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
const ChatTop = styled.div`
padding: 10px 20px;
background-color: white;
display: flex;
align-items: center;
gap: 10px;


> .MuiSvgIcon-root{
    font-size: 30px;
}

`
const ChatInput = styled.div`
position: fixed;
bottom: 20px;
box-sizing: border-box;
display: flex;
justify-content: center;
width: 80vw;
 
 >form{
    border: 1px solid lightgray;
    width: 80%;
    display: flex;
    padding: 10px 10px;
    border-radius:  10px;
    background-color: white;
 }
 >form >input{
    width: 100%;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-size: 18px;
    
 }
`

const ChatMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100vh - 186px);
  overflow: scroll;
  scroll-behavior: smooth;
   /* Hide the scrollbar */
   scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  
  /* WebKit browsers */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
const ChatEnd = styled.div`
  
`