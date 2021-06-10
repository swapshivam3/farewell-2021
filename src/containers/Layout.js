import React, {useState, useEffect} from 'react'
import Rotate from '../components/Rotate/Rotate';
import CustomModal from '../components/Modal/Modal';
import Image from '../components/Images/Images';
import Spinner from '../components/Spinner/Spinner';
import Road from '../components/Road/Road';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import './Layout.css';
import Landing from '../components/LandingPage/Landing'


const Layout = () => {
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    })

if(loading){
    return (
            <Spinner/>  
        );}
        else{
    return(
            <div className="layoutDiv">
                 <Rotate tag={<Landing/>}/>
                 {/* <Landing/> */}
                 {/* </Rotate> */}
            </div>);}      
        /*if the spinner has to load every time, 
        can be fixed by passing layout to every route
        with the corresponding road tag 
        which can then be called over here in rotate*/
};

export default Layout;