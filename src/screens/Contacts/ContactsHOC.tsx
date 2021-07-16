import React, { useEffect } from "react";
import ContactsProvider from "../../providers/ContactsProvider";


const ContactsHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const { fetchList, list, loading, _increasePage } = ContactsProvider()

        useEffect(() => {
            fetchList()
        }, [])

        return <Com
            {...props}
            loading={loading}
            list={list}
            increasePage={_increasePage}
        />
    }
    return wrapper
}

export default ContactsHOC
