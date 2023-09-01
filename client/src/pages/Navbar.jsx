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
                    Home 🏡
                </button>
                </Link>
            </div>

            {/* Navbar menu */}

            <div className='w-40 text-xl m-5'>

                <ul>

                    <li><Link to="/login">
                    🖳 Login Parents  
                    </Link>
                    </li>
                    <br></br>

                    <li>
                        <Link to="/animalgame">
                            Which Animal?🦋
                        </Link>
                    </li>

                    <li> <Link to="/colorgame">
                    🎨 Pick A Color
                    </Link></li>


                    <li>
                        <Link to="/spellinggame">
                            Space Spells🪐
                        </Link>
                    </li>

                </ul>




            </div>


           



        </div>
    )
}

export default Navbar;