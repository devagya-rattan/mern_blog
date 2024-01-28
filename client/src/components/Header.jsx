import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Devagya's
        </span>
        Blog
      </Link>
    </Navbar>
  );
};

export default Header;
