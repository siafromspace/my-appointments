import { BiCalendar } from "react-icons/bi"

const Header = () => {
    return (
        <header>
            <h1 className="text-4xl flex items-center"><BiCalendar className="inline text-red-400" /> My Appointments</h1>
        </header>
    );
}

export default Header;