import React from 'react'   
import SliderControler from './Slider';
import CardsLayout from './Cards';


export const Home = () =>{
    return(
        <div id="home">
            <SliderControler />
            <CardsLayout />  
        </div>
    )
}