import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({})

function UseAuthProvider(props: any) {
    const [loading, setloading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userToken, setUserToken] = useState('')
    const [user, setUser] = useState({})

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('session.token')
        if (token == null) setIsLoggedIn(false)
        else {
            setIsLoggedIn(true)
            setUserToken(token)
        }
        setloading(false)
    }

    useEffect(() => {
        checkToken()
    }, [])

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading, userToken, setUserToken, setUser, user }} {...props} />
}

const useAuth = () => React.useContext(AuthContext)
export { UseAuthProvider, useAuth }

