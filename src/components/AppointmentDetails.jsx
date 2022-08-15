import { useContext } from "react";
import { BiTrash } from "react-icons/bi"
import { AptListContext } from "../contexts/AptListContext";

const AppointmentDetails = ({ id, title, location, date, note }) => {

    const { deleteItem } = useContext(AptListContext)

    return (
        <div className="p-4 flex gap-4 items-start text-neutral-600">
            <div className="bg-red-600 text-white p-2 rounded-md text-lg cursor-pointer"><BiTrash onClick={() => deleteItem(id)} /></div>
            <div className="w-full">
                <div className="flex flex-grow justify-between -mt-2">
                    <h1 className=" text-blue-400 font-bold text-xl">{title}</h1>
                    <p>{date}</p>
                </div>
                <div>
                    <p><span className="text-blue-400 font-bold">Location: </span>{location}</p>
                    <p>{note}</p>
                </div>
            </div>
        </div>
    );
}

export default AppointmentDetails;