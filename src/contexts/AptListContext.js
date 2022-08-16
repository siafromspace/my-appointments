import { createContext, useEffect, useState } from "react";

export const AptListContext = createContext()

const AptListContextProvider = ({ children }) => {
    const AppointmentList = [
        {
            "id": "1",
            "aptTitle": "Onboarding Meeting",
            "aptLocation": "Ikeja City Mall",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Be early and formally dressed."
        },
        {
            "id": "2",
            "aptTitle": "Hangout with besties",
            "aptLocation": "Rhapsody",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Dress classy. Take cash."
        },
        {
            "id": "3",
            "aptTitle": "Family brunch",
            "aptLocation": "Grandfather's house",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Buy potato pie for Grandmother"
        },
        {
            "id": "4",
            "aptTitle": "School health registration",
            "aptLocation": "Deans office",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Take all registration documents."
        },
        {
            "id": "5",
            "aptTitle": "Gym day",
            "aptLocation": "Hotel gym",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Take two bottles of water with you."
        },
        {
            "id": "6",
            "aptTitle": "Nail appointment",
            "aptLocation": "Sissy's nail salon",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Take a good book along. Book an apt for your next fix."
        },
        {
            "id": "7",
            "aptTitle": "Youth group",
            "aptLocation": "Church",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Bring your evangelism response slips along."
        },
        {
            "id": "8",
            "aptTitle": "Project meeting",
            "aptLocation": "Zoom",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Get a pen and paper ready."
        },
        {
            "id": "9",
            "aptTitle": "Class event dinner",
            "aptLocation": "Lecture theatre one",
            "aptDate": "2022-08-11 15:48",
            "aptNotes": "Book your makeup. Get your dress fixed."
        }
    ]
    const [query, setQuery] = useState('')
    const [aptList, setAptList] = useState(() => {
        const localData = localStorage.getItem('appointments')
        return localData ? JSON.parse(localData) : AppointmentList
    })
    const [filteredList, setFilteredList] = useState(aptList)
    const [sortBy, setSortBy] = useState("aptTitle")
    const [orderBy, setOrderBy] = useState("asc")

    const onChangeSortBy = (mySort) => {
        setSortBy(mySort)
    }
    const onChangeOrderBy = (mySort) => {
        setOrderBy(mySort)
    }

    const deleteItem = (id) => {
        const filteredList = aptList.filter(item => id !== item.id)
        setAptList(filteredList)
    }

    const addItem = (formInfo) => {
        setAptList([formInfo, ...aptList])
    }

    useEffect(() => {
        setFilteredList(aptList)
        localStorage.setItem('appointments', JSON.stringify(aptList))
    }, [aptList])

    const onChangeQuery = (myQuery) => {
        setQuery(myQuery)
    }
    useEffect(() => {
        setFilteredList(
            aptList.filter(item => {
                return (
                    item.aptTitle.toLowerCase().includes(query.toLowerCase()) ||
                    item.aptLocation.toLowerCase().includes(query.toLowerCase()) ||
                    item.aptNotes.toLowerCase().includes(query.toLowerCase())
                )
            }).sort((a, b) => {
                let order = (orderBy === "asc") ? 1 : -1
                return (
                    a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                        ? -1 * order : 1 * order
                )
            })
        )
    }, [query, aptList, sortBy, orderBy])

    return (
        <AptListContext.Provider value={{ aptList, deleteItem, addItem, query, onChangeQuery, filteredList, sortBy, onChangeSortBy, orderBy, onChangeOrderBy }}>
            {children}
        </AptListContext.Provider>
    )
}

export default AptListContextProvider