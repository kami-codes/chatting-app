import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        roomId: null,
        roomName: ""
    },
    reducers :{
       setRoomId: (state, action)=>{
        state.roomId = action.payload
       },
       setRoomName: (state, action)=>{
        state.roomName = action.payload
       }
    }
    
})

export const {setRoomId, setRoomName} = appSlice.actions;
export default appSlice.reducer