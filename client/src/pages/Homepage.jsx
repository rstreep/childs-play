/* import */

import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {

    return (
        <div name='home' className=' h-screen bg-[#2b5390]'>

            {/* Main content for homepage*/}

            <div className='max-w-[750px]'>

                <h2 className='text-black font-bold'>Know on the Go!</h2>


            </div>

            <div className='max-w-[750px]'>
                <iframe width="420" height="315"
                    src="">
                </iframe>
            </div>


        </div>
    )
}




/* export feature */
export default Homepage