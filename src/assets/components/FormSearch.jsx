/* eslint-disable react/prop-types */
import { useRef } from "react"

const FormSearch = ({setIdLocation}) => {

    const inputSearch = useRef()
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        setIdLocation(+(inputSearch.current.value))
    }

    return (
        <form onSubmit={handleSubmitSearch}>
            <input 
                type="text"
                placeholder="Enter id location (from 0 to 126)"
                ref={inputSearch} />
            <button>Search</button>
        </form>
    )
}

export default FormSearch