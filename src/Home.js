import React from 'react'
import "./home.css"
import { WiDayFog,WiDayLightWind,WiDayRainMix,WiDaySnow,WiDaySunny } from "react-icons/wi";
import SlideShow from "./Slideshow"
function Home() {
    return (
        <div className="home">
            <div className="font-link">Weather App</div>
            <div className="icon_series">
            <WiDaySunny className="i_5"></WiDaySunny>
                <WiDayFog className="i_1"></WiDayFog>
                <WiDayRainMix className="i_3"></WiDayRainMix>
                <WiDayLightWind className="i_2"></WiDayLightWind>
                <WiDaySnow className="i_4"></WiDaySnow>
               



            </div>
            {/* <div className="image">
                <img src="https://i.pinimg.com/236x/c8/0c/e7/c80ce7295ad100589d81e37080cca247.jpg"></img>
            </div> */}
            <div className="detail">
                <form>
                <input type="text" placeholder="Enter your city" className="input"></input>
                <button className="button">Submit</button>
                </form>
            </div>
            <SlideShow/>
            </div>
    )
}

export default Home
