import React,{useState,useEffect} from 'react';
import './Rows.css';
import axios from '../axios';

const Rows=({title,fetchUrl,isLargeRow=false})=>
{

const baseUrl='https://image.tmdb.org/t/p/original/';

const [movies,setMovies]=useState([]);

useEffect(()=>{

async function fetchData()
{
const request=await axios.get(fetchUrl);
setMovies(request.data.results);
return request;
}

fetchData();

},[fetchUrl]);
 

return(<>

<h1 className="row">{title}</h1>    

 <div className="row_posters">
 {movies.map((movie,i)=>(<div key={movie.id}>
 
 <img 
  className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
 src={`
   ${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path
   }`} 
 alt={movie.name}
 />
 </div>))}
 </div>

</>)

}

export default Rows;