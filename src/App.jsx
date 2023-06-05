/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css'
import getRandomNumber from './assets/utils/getRandomNumber';
import useFetch from './assets/hooks/useFetch';
import LocationInfo from './assets/components/LocationInfo';
import ResidentCard from './assets/components/ResidentCard';
import FormSearch from './assets/components/FormSearch';

function App() {

	const randomId = getRandomNumber(126)
	const [idLocation, setIdLocation] = useState(randomId) 
	const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    const [isEmpty, setIsEmpty] = useState(false)

	
	const [location, getApiLocation, hasError] = useFetch(url)

	useEffect(() => {
		getApiLocation()
	}, [idLocation])


	return (
		<div className='ram-app'>
			<div className='head'></div>
			<div className="form-container">
				<FormSearch 
					setIdLocation={setIdLocation}
					setIsEmpty={setIsEmpty}
					isEmpty={isEmpty} />
			</div>
			{
				hasError || (idLocation === 0)
					? <h1 className='error-msg'>Id location not valid. Only numbers from 1 to 126 😒</h1>
					: (
						<>
							<div className="location-container">
								<LocationInfo location={location} />
							</div>
							<div className="residents-container">
								{
									location?.residents.map(url => (
											<ResidentCard key={url} url={url}/>
									))
								}
							</div>
						</>
					)
			}
			
		</div>
	)
}
	
export default App
