import { createContext, useEffect, useState } from "react";
import AppointmentList from "../data.json"

export const AptListContext = createContext()

const AptListContextProvider = ({ children }) => {
    const [query, setQuery] = useState('')

    let filteredAppointmentList = AppointmentList.filter(item => {
        return (
            item.aptTitle.toLowerCase().includes(query.toLowerCase()) ||
            item.aptLocation.toLowerCase().includes(query.toLowerCase()) ||
            item.aptNotes.toLowerCase().includes(query.toLowerCase())
        )
    })

    const [aptList, setAptList] = useState(filteredAppointmentList)

    const deleteItem = (id) => {
        const filteredList = aptList.filter(item => id !== item.id)
        setAptList(filteredList)
    }

    const addItem = (formInfo) => {
        setAptList([formInfo, ...aptList])
    }

    const onChangeQuery = (myQuery) => {
        setQuery(myQuery)
    }
    useEffect(() => {
        setAptList(filteredAppointmentList)
    }, [query])

    return (
        <AptListContext.Provider value={{ aptList, deleteItem, addItem, query, onChangeQuery }}>
            {children}
        </AptListContext.Provider>
    )
}

export default AptListContextProvider