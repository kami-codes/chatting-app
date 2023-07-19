import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase/firebase'
import { styled } from 'styled-components'
import Spinner from 'react-spinkit'
import { useAuthState } from 'react-firebase-hooks/auth'


function Login() {

    const [user, loading] = useAuthState(auth)

    const handleClick = ()=>{
        signInWithPopup(auth, provider)
}

  return (
    <LoginContainer>
      <LoginWindow>

        <img src="https://cdn.dribbble.com/users/267404/screenshots/3713416/talkup.png" alt="" />
<h1>Chating App</h1>
 

 {loading ? <Spinner style={{margin: '20px'}} fadeIn='none' name="three-bounce" /> :  <MainLogin onClick={handleClick}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
    <p>Continue with Google</p>
 </MainLogin> }


      </LoginWindow>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f2ef;
   
`

const LoginWindow = styled.div`
    padding: 20px;
    background-color: #f7f6fd;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: center;

    >img{
        height: 150px;
    }
    >h1{
        font-size: 30px;
        font-weight: 500;
        color: rgb(25,25,25);
    }
`
const MainLogin = styled.div`
margin-top: 20px;
display: flex;
gap: 10px;
padding: 10px;
border: 1px solid lightgray;
border-radius: 10px;
align-items: center;
cursor: pointer;
transition: all linear 0.1s;

&:hover{
    background-color: white;
}
    >img{
        width: 30px;
    }
    >p{
        font-weight: 500;
        font-size: 18px;
        color: rgb(50,50,50);
    }
`