import { useContext, useState } from "react";
import { BiArchive } from "react-icons/bi"
import { AptListContext } from "../contexts/AptListContext";

const AppointmentForm = () => {
    const [toggleForm, setToggleForm] = useState(false)

    const clearData = {
        aptTitle: '',
        aptLocation: '',
        aptDate: '',
        aptTime: '',
        aptNotes: ''
    }
    const [formData, setFormData] = useState(clearData)
    const { addItem } = useContext(AptListContext)

    const formInfo = {
        id: Math.random(),
        aptTitle: formData.aptTitle,
        aptLocation: formData.aptLocation,
        aptDate: formData.aptDate + ' ' + formData.aptTime,
        aptNotes: formData.aptNotes
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formInfo)
        setFormData(clearData)
        setToggleForm(false)
    }

    return (
        <div className="flex flex-col rounded-md border-neutral-200 border-2">
            <h1 onClick={() => setToggleForm(!toggleForm)} className={`p-2 bg-blue-400 text-white flex items-center cursor-pointer ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}><BiArchive className="inline mr-2" />Add Appointment</h1>
            {toggleForm &&
                <form className="p-4 space-y-4" >
                    <div className="flex justify-between">
                        <label htmlFor="aptTitle">Appointment Title</label>
                        <input onChange={(e) => setFormData({ ...formData, aptTitle: e.target.value })} value={formData.aptTitle} type="text" className="border-2 border-neutral-200 rounded-md w-3/5" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="aptLocation">Appointment Location</label>
                        <input onChange={(e) => setFormData({ ...formData, aptLocation: e.target.value })} value={formData.aptLocation} type="text" className="border-2 border-neutral-200 rounded-md w-3/5" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="aptDate">Appointment Date</label>
                        <input onChange={(e) => setFormData({ ...formData, aptDate: e.target.value })} value={formData.aptDate} type="date" name="aptDate" id="aptDate" className="border-2 border-neutral-200 rounded-md w-3/5" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="aptTime">Appointment Time</label>
                        <input onChange={(e) => setFormData({ ...formData, aptTime: e.target.value })} value={formData.aptTime} type="time" name="aptTime" id="aptTime" className="border-2 border-neutral-200 rounded-md w-3/5" />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="aptNotes">Appointment Notes</label>
                        <textarea onChange={(e) => setFormData({ ...formData, aptNotes: e.target.value })} value={formData.aptNotes} name="aptNotes" id="aptNotes" cols="30" rows="3" placeholder="Detailed comments about the appointment" className="border-2 border-neutral-200 rounded-md p-2 w-3/5 placeholder:text-sm placeholder:text-neutral-600"></textarea>
                    </div>
                    <button onClick={handleSubmit}
                        className="bg-blue-400 text-white py-2 px-4 rounded-md cursor-pointer relative float-right">Submit</button>
                </form>}
        </div>
    );
}

export default AppointmentForm;