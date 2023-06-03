/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import '../css/residentCard.css'

/* eslint-disable react/prop-types */
const ResidentCard = ({url}) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, [])

    console.log(resident)

    return (
        
            <div className="resident-card">
                <header>
                    <img src={resident?.image} alt="" />
                    <div>
                        <span className="status-circle"></span>
                        <span className="status">{resident?.status}</span>
                    </div>
                </header>



                <section className="card-body">
                    <h3 className="resident-name">{resident?.name}</h3>
                    <ul>
                        <li>
                            <span>Specie</span>
                            <p className="resident-specie">{resident?.species}</p>
                        </li>
                        <li>
                            <span>Origin</span>
                            <p className="resident-origin">{resident?.origin.name}</p>
                        </li>
                        <li>
                            <span>Total appearences</span>
                            <p className="resident-episodes">{resident?.episode.length}</p>
                        </li>
                    </ul>
                </section>
            </div>
    )
}

export default ResidentCard