import { useContext, useState } from "react";
import { BiSearch, BiArrowToBottom, BiCheck } from "react-icons/bi"
import { AptListContext } from "../contexts/AptListContext";

const DropDown = ({ toggle, sortBy, orderBy, onChangeSortBy, onChangeOrderBy }) => {

    if (!toggle) {
        return null
    }
    return (
        <ul className="absolute bg-white top-12 right-0 shadow-md rounded-md w-60 z-10">
            <li onClick={() => onChangeSortBy("aptTitle")} className="cursor-pointer px-4 text-neutral-500 hover:bg-neutral-400 hover:text-white py-2">Title{sortBy === "aptTitle" && <BiCheck className="inline float-right text-neutral-900" />}</li>
            <li onClick={() => onChangeSortBy("aptDate")} className="cursor-pointer px-4 text-neutral-500 hover:bg-neutral-400 hover:text-white py-2">Date {sortBy === "aptDate" && <BiCheck className="inline float-right text-neutral-900" />}</li>
            <li onClick={() => onChangeSortBy("aptLocation")} className="cursor-pointer px-4 text-neutral-500 hover:bg-neutral-400 hover:text-white py-2">Location {sortBy === "aptLocation" && <BiCheck className="inline float-right text-neutral-900" />}</li>
            <hr />
            <li onClick={() => onChangeOrderBy("asc")} className="cursor-pointer px-4 text-neutral-500 hover:bg-neutral-400 hover:text-white py-2">Asc {orderBy === "asc" && <BiCheck className="inline float-right text-neutral-900" />}</li>
            <li onClick={() => onChangeOrderBy("desc")} className="cursor-pointer px-4 text-neutral-500 hover:bg-neutral-400 hover:text-white py-2">Desc {orderBy === "desc" && <BiCheck className="inline float-right text-neutral-900" />}</li>
        </ul>
    );
}

const Search = () => {
    const { query, onChangeQuery, sortBy, orderBy, onChangeSortBy, onChangeOrderBy } = useContext(AptListContext)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    return (
        <div className="relative w-full flex">
            <BiSearch className="inline absolute top-1/2 -translate-y-1/2 left-2" />
            <input
                value={query}
                onChange={(e) => onChangeQuery(e.target.value)}
                type="text" placeholder="Search"
                className="border-2 border-neutral-200 rounded-l-md pl-8 appearance-none h-10 w-8/12 sm:w-10/12" />
            <button onClick={() => setToggleDropDown(!toggleDropDown)}
                className="bg-blue-400 text-white py-2 px-2 w-4/12 sm:w-2/12"> Sort By <BiArrowToBottom className="inline" /> </button>
            <DropDown toggle={toggleDropDown} sortBy={sortBy} orderBy={orderBy} onChangeSortBy={(mySort) => onChangeSortBy(mySort)} onChangeOrderBy={(mySort) => onChangeOrderBy(mySort)} />
        </div>
    );
}

export default Search;