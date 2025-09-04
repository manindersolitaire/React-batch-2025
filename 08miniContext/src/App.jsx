
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
    {/* <Header/> */}
    <Login/>
    <Profile/>
    {/* <Footer/> */}
    </UserContextProvider>
  )
}

export default App
