
import React,{useState, useEffect} from 'react'
import { Head } from './style'
import {MdPhone} from 'react-icons/md'
import {BsCloudSun} from 'react-icons/bs'
import {IoMdMenu} from 'react-icons/io'
import axios from 'axios';

function Header(props) {
	const [tempData, setTempData]= useState([])
	useEffect(()=>{
		
		const fetchData = async() => {
			try{
				if(props.lat === undefined || props.lang === undefined ){
					const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578')
	           		console.log('axios result defult', res.data.main.temp)
					   setTempData(res.data.main.temp)
				}else{
					const res = await axios.get(props.apiURL)
					console.log('axios result props', res.data.main.temp)
					setTempData(res.data.main.temp)
	
				}
				
			}catch(error){
			console.log(error)
			}
		
		}
		fetchData()
	},[])
	
 
let celsiusTemp = ((tempData -32)/1.8).toFixed()

  return (
    <Head>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-2 logo">
					<img className='img-fluid' src="/logo.png" alt="logo"/>
				</div>
				<div className="col-10 right-side">
					<div className="d-flex justify-content-end">
							<div className='icon me-3'>
								<BsCloudSun style={{fontSize:27}}/>
							{celsiusTemp !== undefined  ? <span>{celsiusTemp}&deg;C</span>:null}

							</div>
							<div className='icon phone me-3'>
								<MdPhone/>
							</div>
							<button className='me-3'>Book Now</button>
							<div className='icon d-flex align-items-center'>
								<span className='me-3'>Menu</span>
								<IoMdMenu style={{fontSize:27}}/>
							</div>
					</div>
					
				</div>
			</div>
		</div>
    </Head>
  )
}

export default Header