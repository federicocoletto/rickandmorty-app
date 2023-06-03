/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

/* eslint-disable react/prop-types */
const ResidentCard = ({url}) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
        getApiResident()
    }, [])
    

    return (
        <article className="residents-container">
            <header className="resident-card">
                    <img src={resident?.image} alt="" />
                    <div>
                        <span></span>
                        <span>{resident?.status}</span>
                    </div>
            </header>
            <section className="card-body">
                <h2 className="resident-name">{resident?.name}</h2>
                <ul>
                    <li><span>Specie</span><span className="resident-specie">{resident?.speces}</span></li>
                    <li><span>Origin</span><span className="resident-origin">{resident?.origin.name}</span></li>
                    <li><span>Episodes appierences</span><span className="resident-episodes">{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard