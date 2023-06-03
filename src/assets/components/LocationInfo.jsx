/* eslint-disable react/prop-types */
const LocationInfo = ({location}) => {

    return (
        <div className="location-info">
            <h1>Name: {location?.name}</h1>
            <ul>
                <li><span>Type: {location?.type}</span></li>
                <li><span>Dimension:{location?.dimension}</span></li>
                <li><span>Population: {location?.residents.length}</span></li>
            </ul>
        </div>
    )
}

export default LocationInfo