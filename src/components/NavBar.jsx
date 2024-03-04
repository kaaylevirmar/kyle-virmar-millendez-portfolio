import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='bg-slate-400 p-5'>
      <div className="flex justify-between px-10">
        <div className="w-80"></div>
        <div>
          <ul className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
