/* import */

import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {

    return (
        <div name='home' className=' h-screen bg-[#2b5390]'>

            {/* Main content for homepage*/}

            <div className='max-w-[750px]'>


                <Link to="/">
                    <button className='text-white group border-2 px-1 py-3 my-3 flex justify-center hover:bg-[#8BB7CC] hover:border-black'>

                    </button>  </Link>


            </div>


        </div>
    )
}




/* export feature */
export default Homepage