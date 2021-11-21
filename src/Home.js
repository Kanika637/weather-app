import React from 'react'
import "./home.css"
function Home() {
    return (
        <div className="home">
            <div className="heading"><h1>WEATHER APP</h1></div>
            <div className="sub_line">
                <h4>Check the weather</h4>
            </div>
            <div className="home_container">
                <form>

                    <input type="text" placeholder="Enter your country"></input>
                    <button className="button">Search</button>
                </form>
            </div>
            
            
        </div>
    )
}

export default Home
