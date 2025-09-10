import {useContext , useState , useEffect, createContext} from 'react'
import {account} from '../appwriteConfig'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    
    const [loading, setLoading] =  useState(true)
    const [user,setUser] = useState(false)

    useEffect(()=>{
        checkUserStatus()
        setLoading(false)
    },[])

    const loginUser =  async(userInfo) => {
        setLoading(true)
        try{
           let response = await account.createEmailPasswordSession(userInfo.email,userInfo.password)
        let accountDetails = await account.get()
        console.log('Account Details: ' ,accountDetails )
        setUser(accountDetails)
        }catch(error){
            console.log(error)
        }
        setLoading(false)
    }

    const logoutUser = () => {}

    const checkUserStatus = () => {
        setLoading(true)
        // try {
            
        // } catch (error) {
            
        // }
        setLoading(false)
    }

    const registerUser = (userInfo) => {}

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }
    return (
    <AuthContext.Provider value={contextData}>
        {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext

