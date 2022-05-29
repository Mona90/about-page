import React,{useState, useEffect} from 'react'
import { Banner } from './style'
import Header from '../Header'

function SectionTop() {

  const [lat, setLat] = useState();
	const [long, setLong] = useState();
 const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f1130b3524feefd0549671bf69edc578`
  useEffect(()=>{
    getCurrentLocationData()
  },[])
  const getCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude) 
            setLong(position.coords.longitude)  
        })
}
// console.log('from Section top', lat, long)
// console.log('from Section top url', apiURL)
  return (
    <Banner style={{backgroundImage:`url("/images/bg-top.png")`}}>
      <Header apiURL={apiURL} lat={lat} long={long} />
    </Banner>
  )
}

export default SectionTop