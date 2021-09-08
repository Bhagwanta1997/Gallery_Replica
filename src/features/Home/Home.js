import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    console.log("Hello Home");
    return (
        <div>
            Home Component
            &nbsp;<Link to="/login">login</Link>

        </div>
    )
}


export default Home;