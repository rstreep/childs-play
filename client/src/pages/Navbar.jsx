/* imports */

import React, { useState } from 'react';


// import { Link } from 'react-scroll';

import { Link } from "react-router-dom";


/* Navbar */

const Navbar = () => {



    return (
        <div className='flex justify-between p-4 bg-cyan-400'>

            <div className='w-32 h-20 p-4'>
                <Link to="/">  <button type="button" class="cursor-crosshair ...">
                    Home 🏡
                </button>
                </Link>
            </div>

            {/* Navbar menu */}

            <div className='w-40'>

                <ul>

                    <li><Link to="/login">
                        Login - Parents! 🖳
                    </Link>
                    </li>

                    <li>
                        <Link to="/animalgame">
                            Animal Game 🦋
                        </Link>
                    </li>

                    <li> <Link to="/colorgame">
                        Color Game 🎨
                    </Link></li>


                    <li>
                        <Link to="/spellinggame">
                            Let's Spell! 🔠
                        </Link>
                    </li>

                </ul>




            </div>


           



        </div>
    )
}

export default Navbar;