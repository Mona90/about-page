
import React,{useState, useEffect} from 'react'
import { Head } from './style'
import {MdPhone} from 'react-icons/md'
import {BsCloudSun} from 'react-icons/bs'
import {IoMdMenu} from 'react-icons/io'
import axios from 'axios';

function Header(props) {
	console.log('test props from header', props)
	const [data, setData]= useState([])
	useEffect(()=>{
		
		const fetchData = async() => {
			try{
				const res = await axios.get(props.apiURL)
	            console.log('axios result', res.data)
					setData(res.data)
			}catch(error){
			console.log(error)
			}
		
		}
		fetchData()
	},[])
	
 
console.log('test save data', data)
const temp = data.main.temp
const celsiusTemp = ((temp -32)/1.8).toFixed()
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
							{data && <span>{celsiusTemp}&deg;C</span>}

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