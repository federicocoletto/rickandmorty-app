/* eslint-disable react/prop-types */
import { useRef } from "react"
import "../css/formSearch.css"

const FormSearch = ({setIdLocation}) => {

    const inputSearch = useRef()
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        setIdLocation(+(inputSearch.current.value))
    }

    return (
        <form onSubmit={handleSubmitSearch} className="search-form">
            <input 
                type="text"
                placeholder="Enter id location"
                ref={inputSearch} />
            <button>Search</button>
        </form>
    )
}

export default FormSearch