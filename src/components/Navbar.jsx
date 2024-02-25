import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/Pricehub.png'

function Navbar() {
  return (
    <div className='w-full flex justify-around '>
        
        <div>
            <Link to="/">
                <img className='w-30 h-10' src={logo} alt="logo" />
            </Link>
        </div>

        <div>
            <ul className='flex gap-7'>
                <li>
                    <NavLink to="/" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/trending" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"}`}>
                        Trending
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bestSeller" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"}`}>
                        Best Sellers
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"}`}>
                        Conatct Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=>`text-gray-600 ${isActive?"text-orange-700":"text-gray-700"}`}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar