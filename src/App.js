
import { styled } from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { useSelector } from 'react-redux';
import Chat from './Components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Components/Login';
import { auth } from './firebase/firebase';

function App() {

  const roomId = useSelector((state)=> state.appRedux.roomId)
  const [user, loading, error] = useAuthState(auth);

  console.log(user)

  return (
    <div className="App">
      {!user ? <Login /> : <>   <Header /> 
     <AppBody>
      <Sidebar />
      {roomId && <Chat />}
      
     </AppBody> </>}
   
    </div>
  );
}

export default App;

const AppBody = styled.div`
width: 100vw;
display: flex;

height: calc(100vh - 70px);
overflow: hidden;
position: relative;
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