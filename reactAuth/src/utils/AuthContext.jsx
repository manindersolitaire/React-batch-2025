import {useContext , useState , useEffect, createContext} from 'react'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    
    const [loading, setLoading] =  useState(true)
    const [user,setUser] = useState(true)

    useEffect(()=>{
        setLoading(false)
    },[])

    const loginUser =  (userInfo) => {}

    const logoutUser = () => {}

    const checkUserStatus = () => {}

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

