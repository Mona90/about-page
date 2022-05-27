
import React,{useState, useEffect} from 'react'
import axios from 'axios';

function Header() {
	const [lat, setLat] = useState([]);
	const [lon, setLon] = useState([]);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1130b3524feefd0549671bf69edc578`
	const [data, setData]= useState([])
	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(function(position) {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
			});
		const fetchData = async() => {
			try{
				const res = await axios.get(url)
					setData(res.data)
					console.log('test', res.data);
			}catch(error){
			console.log(error)
			}
		
	    }
     
	  fetchData()
	},[lat,lon])
console.log('data', data)
  return (
    <div>
    <div className="container">
       <div className="row">
           <div className="col-2 logo">
              <img src="/logo.png" alt="logo"/>
           </div>
           <div className="col-10">
	           <div className="d-flex">
	           		<div>
	                 	<img src="/images/icons/weather.png" alt="icon"/>
						 {data && <span>{data.main.temp}&deg;C</span>}
	                 	
	              	</div>
	           </div>
              
           </div>
       </div>
    </div>
    </div>
  )
}

export default Header