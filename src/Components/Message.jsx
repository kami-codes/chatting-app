import React from 'react'
import { styled } from 'styled-components'

function Message({text, id,  name, photo, msgDate}) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
    const stringDate = msgDate?.toDate();

    const realDate = stringDate?.toLocaleDateString("en-US", options)

      console.log(realDate)

  return (
    <MessageContainer>
      <MessageTop>
    <img src={photo} />
      </MessageTop>

      <MessageBottom>
        <MessageInfo>
            <h2>{name}</h2>
            <p>{realDate} </p>
        </MessageInfo>
        <h2>
            {text}
        </h2>
      </MessageBottom>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
padding: 5px 20px;
background-color: white;
display: flex;
gap: 10px;

`
const MessageTop = styled.div`
    >img{
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }
`
const MessageBottom = styled.div`
    >h2{
        font-size: 18px;
        font-weight: 600;
        
    }
`
const MessageInfo = styled.div`
    >h2{
        font-weight: 500;
        font-size: 14px;
        color: rgba(0,0,0,0.6);
    }
    display: flex;
    gap: 10px;
    >p{
        color: #9d9d9d;
        font-size: 12px;
        font-weight: 400;
    }
`