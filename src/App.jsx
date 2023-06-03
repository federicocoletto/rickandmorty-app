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
	
	const [location, getApiLocation, hasError] = useFetch(url)

	useEffect(() => {
		getApiLocation()
	}, [idLocation])

	console.log(idLocation);

	return (
		<div className='ram-app'>
			<div className='head'></div>
			<FormSearch setIdLocation={setIdLocation}/>
			{
				hasError || (idLocation === 0)
					? <h1>Id location not valid. Only numbers from 1 to 126 😒</h1>
					: (
						<>
							<LocationInfo location={location} />
							<div className="residetns-container">
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
