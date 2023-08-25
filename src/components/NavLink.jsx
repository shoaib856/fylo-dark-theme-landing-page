import propTypes from "prop-types";

const NavLink = ({ children }) => {
  return (
    <li className="text-gray-300 hover:text-white hover:underline hover:underline-offset-1 rounded-md text-sm font-medium transition ">
      <a href="#">{children}</a>
    </li>
  );
};

NavLink.propTypes = {
  children: propTypes.string.isRequired,
};

export default NavLink;
