import React,{useState,useEffect} from 'react';
import './Banner.css';
import banner from "../../../assets/images/logo/banner.png";
import axios from '../axios';
import request from '../requests';


function truncate(str,n)
{
return str?.length>n?str.substr(0,n-1)+'...':str;
}

const Banner=()=>
{
const [movie,setMovie]=useState([]);



useEffect(()=>{
async function fetchData()
{
const requests=await axios.get(request.fetchNetflixOriginals);

setMovie(requests.data.results[Math.floor(Math.random()*requests.data.results.length-1)]);

}

fetchData();
},[]);




return (<>
<header className="banner" style={{backgroundSize:"cover",backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:'center center'}}>



 <div className="banner_contents">
   <h1 className="banner_title">{movie?.title || movie?.name || movie?.orignal_name}</h1> 
    <div className="banner_buttons">
      <button className="banner_button">Play</button>
      <button className="banner_button">Next</button>
    </div>
    <h1 className="banner_description">
     {truncate(movie?.overview,150)}
    </h1>
 </div>
  <div className="banner--fadeBottom"/>



</header>


 

  
</>);

}

export default Banner;