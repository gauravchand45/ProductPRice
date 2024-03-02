import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/Pricehub.png'

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center mt-4 h-14'>
        
        <div className='ml-16 '>
            <Link to="/">
                <img className='w-40 h-12 rounded-md' src={logo} alt="logo" />
            </Link>
        </div>

        <div className='mr-32 border-[1px] border-black p-3 rounded-md w-[900px] flex justify-center items-center'>
            <ul className='flex gap-16'>
                <li className='text-base w-28'>
                    <NavLink to="/" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"} w-8`}>
                        Home
                    </NavLink>
                </li>
                <li className='text-base w-28'>
                    <NavLink to="/trending" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"} `}>
                        Trending
                    </NavLink>
                </li>
                <li className='text-base w-28'>
                    <NavLink to="/bestSeller" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"} `}>
                        Best Sellers
                    </NavLink>
                </li>
                <li className='text-base w-28'>
                    <NavLink to="/contact" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"} `}>
                        Conatct Us
                    </NavLink>
                </li>
                <li className='text-base w-28'>
                    <NavLink to='/about' className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"} `}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar