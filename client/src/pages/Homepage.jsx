/* import */

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/images/homepage-video.mp4';



const Homepage = () => {

    return (
        <div className='h-screen'>


            {/* Main content for homepage*/}

            {/* <div>

                <h2 className='text-black font-bold'>Know on the Go!!</h2>


            </div> */}

              {/* Animiated background section */}

            <div className='w-screen'>

                <video autoPlay loop muted id='video'>

                    <source src={backgroundVideo} type='video/mp4' />

                </video>

                
                
            </div>


        </div>
    )
}




/* export feature */
export default Homepage