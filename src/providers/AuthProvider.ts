import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from "react";
import { Alert } from "react-native";
import { AuthValues } from '../../types';
import { Configs } from "../constants/Configs";
import { useAuth } from '../hooks/useAuth';


function AuthProvider() {
    const [loading, setloading] = useState(false)
    const { setIsLoggedIn, setUserToken, setUser }: any = useAuth()
    const { navigate } = useNavigation()
    
    const _login = async (values: AuthValues) => {
        try {
            setloading(true)
            const reqesut = await axios.post(Configs.baseUrl + '/auth/login', values)
            setUserToken(reqesut.data.token)
            await AsyncStorage.setItem('session.token', reqesut.data.token)
            setIsLoggedIn(true)
            setloading(false)
            return setUser(reqesut.data)
        } catch (error) {
            if (error.response.status === 400) {
                return Alert.alert('Error', 'Wrong username or password!')
            }
            Alert.alert('Error', 'Something went wrong!!')
        }
    }

    const _register = async (values: AuthValues) => {
        try {
            setloading(true)
            const reqesut = await axios.post(Configs.baseUrl + '/auth/signup', values)
            setloading(false)
            console.log(reqesut.data)
            Alert.alert('Congratulations', 'Account created successfully.', [{
                onPress: () => navigate('Login')
            }])
        } catch (error) {
            if (error.response.status === 400) {
                return Alert.alert('Error', 'Wrong username or password!')
            }
            Alert.alert('Error', 'Something went wrong!!')
        }
    }


    const _logout = async () => {
        await AsyncStorage.removeItem('session.token')
        setIsLoggedIn(false)
    }

    return {
        loading,
        _login,
        _logout,
        _register
    } as const
}

export default AuthProvider
