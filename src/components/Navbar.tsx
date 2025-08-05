import React from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';

const navLinkClass = ({ isActive }) => {
  console.log(`NavLink active status: ${isActive}`);
  return isActive
    ? 'text-blue-600 font-semibold cursor-pointer'
    : 'hover:text-white cursor-pointer';
};

const Navbar = () => {

    const navigate=useNavigate();
  return (
    <div>
      <div className="bg-green-300 p-4 font-medium">
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/Home" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Product" className={navLinkClass}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contant" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={navLinkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mt-4 px-4">
        <button onClick={()=> navigate('/Contant')}
          type="submit"
          className="bg-white text-black px-4 py-2 rounded shadow hover:bg-black hover:text-white transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
