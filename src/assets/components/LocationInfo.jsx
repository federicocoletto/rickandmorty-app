/* eslint-disable react/prop-types */
import "../css/locationInfo.css"

const LocationInfo = ({location}) => {

    return (
        <div className="location-info">
            <h3>{location?.name}</h3>
            <ul>
                <li>
                    <h6>Type</h6>
                    <p>{location?.type}</p>
                </li>
                <li>
                    <h6>Dimension</h6>
                    <p>{location?.dimension}</p>
                </li>
                <li>
                    <h6>Population</h6>
                    <p>{location?.residents.length}</p>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfo