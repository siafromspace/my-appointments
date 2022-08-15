import { useContext } from "react";
import { AptListContext } from "../contexts/AptListContext";
import AppointmentDetails from "./AppointmentDetails";

const AppointmentList = () => {
    const { aptList } = useContext(AptListContext)
    return (
        <div className="divide-y divide-gray-200">
            {aptList.map(item => {
                return <AppointmentDetails
                    key={item.id}
                    id={item.id}
                    title={item.aptTitle}
                    location={item.aptLocation}
                    date={item.aptDate}
                    note={item.aptNotes} />
            })}
        </div>
    );
}

export default AppointmentList;