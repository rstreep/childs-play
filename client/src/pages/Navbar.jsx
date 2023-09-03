/* imports */

import React, { useState } from 'react';


// import { Link } from 'react-scroll';

import { Link } from "react-router-dom";


/* Navbar */

const Navbar = () => {



    return (
        <div className='flex justify-between p-4 bg-cyan-500'>

            <div className='w-32 h-20 p-4 text-2xl'>
                <Link to="/">  <button type="button" class="cursor-crosshair ...">
                    <p id='font'>Home 🏡</p>
                </button>
                </Link>
            </div>

            <div>
                <h1 id='title'> Know on the Go! ✏️ </h1>
            </div>

            {/* Navbar menu */}

            <div className='md:w-32 lg:w-48 text-xl m-3'>

                <ul>

                    <li><Link to="/login">
                    <p id='font'>🖳 Login Parents  </p>
                    </Link>
                    </li>
                    <br></br>

                    <li>
                        <Link to="/animalgame">
                        <p id='font'> Which Animal?🦋</p>
                        </Link>
                    </li>

                    <li> <Link to="/colorgame">
                    <p id='font'>🎨 Pick A Color </p>
                    </Link></li>


                    <li>
                        <Link to="/spellinggame">
                        <p id='font'> Space Spells🪐</p>
                        </Link>
                    </li>

                </ul>




            </div>


           



        </div>
    )
}

export default Navbar;