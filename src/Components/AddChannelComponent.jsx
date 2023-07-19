import React from 'react'
import { styled } from 'styled-components'

function AddChannelComponent() {
  return (
    <AddChannelContaier>
      <AddChannelWindow>
        <h1>
            Add Channel
        </h1>
        <input type="text" placeholder='channel-name' />
      </AddChannelWindow>
    </AddChannelContaier>
  )
}

export default AddChannelComponent

const AddChannelContaier = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
`

const AddChannelWindow = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`