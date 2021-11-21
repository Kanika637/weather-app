import React from 'react'
import "./home.css"
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <form>
                    <input type="text" placeholder="Enter your country name"></input>
                    <button className="button">Search</button>
                </form>
            </div>
            
        </div>
    )
}

export default Home
