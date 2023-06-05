/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import "../css/formSearch.css"
import getRandomNumber from "../utils/getRandomNumber"

const FormSearch = ({setIdLocation, setIsEmpty, isEmpty}) => {

    const inputSearch = useRef()
    
    
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        
        const inputValue = inputSearch.current.value.trim()

        if (inputValue === '') {
            setIsEmpty(true)
            setIdLocation(getRandomNumber(126))
            } else {
            setIdLocation(inputValue)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmitSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Enter id location"
                    ref={inputSearch} />
                <button>Search</button>
            </form>
            { isEmpty && <h3 className="isEmpty-msg">Empty imput. Here's a random location for you</h3> }
        </>
    )
}

export default FormSearch