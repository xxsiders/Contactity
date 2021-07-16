import axios from 'axios';
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Configs } from "../constants/Configs";
import { useAuth } from '../hooks/useAuth';


function ContactsProvider() {
    const [loading, setloading] = useState(false)
    const [list, setList]: any = useState([])
    const { userToken }: any = useAuth()
    const [page, setPage] = useState(1)

    const _increasePage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        fetchList()
    }, [page])

    const fetchList = async () => {
        try {
            if (page === 1) {
                setloading(true)
            }
            const reqesut = await axios.get(Configs.baseUrl + `/contacts?page=${page}&limit=10`, {
                headers: {
                    "Authorization": `Bearer ${userToken}`,
                }
            })

            if (page === 1) {
                setList(reqesut.data.docs)
            } else {
                setList([...list, ...reqesut.data.docs])
            }
            setloading(false)

            return reqesut.data
        } catch (error) {
            Alert.alert('Error', 'Something went wrong!!')
        }
    }


    return {
        loading,
        fetchList,
        list,
        _increasePage,
        page
    } as const
}

export default ContactsProvider
