import React from 'react';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import Rows from './Rows/Rows';
import './homeScreen.css';
import request from './requests';


const Home=(props)=>
{

console.log(props);
return (
         <div className="homeScreen"> 
             <Nav/>

             <Banner/>

             <Rows title="Netflix Orignals" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
             <Rows title="Trending Now" fetchUrl={request.fetchTrending}/>
             <Rows title="Top Rated" fetchUrl={request.fetchTopRated}/>
             <Rows title="Action Movies" fetchUrl={request.fetchActionMovies}/>
             <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
             <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
             <Rows title="Ramance Movies" fetchUrl={request.fetchRomanceMovies}/>
             <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries}/>

         </div>);
}

export default Home;