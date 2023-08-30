/* imports */

import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';

// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";


/* Navbar */

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div id='nav' className=' w-full h-[100px] flex justify-between items-center px-4 bg-[#2b5390] text-gray-300'>

            <div> <Link to="/">  HOME </Link>

            </div>

            {/* Navbar menu */}

            <div className='hidden md:flex' >

                <ul className='hidden md:flex'>
                    <li>
                        <Link to="/" >
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


            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10' >

                {!nav ? <FaBars /> : <FaTimes />}

            </div>



            {/* Mobile menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7299d2] flex flex-col justify-center items-center'}>
                <li className='py-5 text-3xl'>Animal Game</li>
                <li className='py-5 text-3xl'>Color Game</li>
                <li className='py-5 text-3xl'>Homepage</li>
                <li className='py-5 text-3xl'>Spelling Game</li>
            </ul>



        </div>
    )
}

export default Navbar;