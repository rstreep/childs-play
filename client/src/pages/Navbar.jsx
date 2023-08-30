/* imports */

import React, { useState } from 'react';


// import { Link } from 'react-scroll';

import { Link } from "react-router-dom";


/* Navbar */

const Navbar = () => {



    return (
        <div className='flex justify-between'>

            <div className='w-32'>
                <Link to="/">  HOME </Link>
            </div>

            {/* Navbar menu */}

            <div className='w-80'>

                <ul>
                    <li>
                        <Link to="/animalgame" >
                            Animal Game!
                        </Link>
                    </li>
                    <li> <Link to="/colorgame" >
                        Color Game!
                    </Link></li>
                    <li><Link to="/login"  >
                        Login
                    </Link></li>

                    <li><Link to="/spellinggame">
                        Let's Spell!
                    </Link></li>

                </ul>

            </div>







        </div>
    )
}

export default Navbar;