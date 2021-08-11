import React,{useState,useEffect} from 'react';
import './Nav.css';
import logo from '../../../assets/images/logo/netflixlogo.png';

const Nav=()=>
{

const [show,setShow]=useState(false);


const transitionNavbar=()=>
{
console.log('scroll');
 if(window.scrollY > 100)
 {
  setShow(true); 

 }else
 {
  setShow(false);  
 } 
 
}

useEffect(()=>{

window.addEventListener('scroll',transitionNavbar)

return ()=>window.removeEventListener('scroll',transitionNavbar);
},[]);


return(<>
   <div className={`nav ${show && "nav_black"}`}>
    <div className="nav_contents">

       <img src={logo}  alt="logo" className="nav_logo"/>  

       <img src={logo}  alt="logo" className="nav_avatar" />


    </div>
   </div> 	
   </>);
}

export default Nav;