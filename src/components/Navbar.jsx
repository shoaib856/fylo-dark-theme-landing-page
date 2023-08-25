import logo from "../assets/images/logo.svg";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    { title: "Features" },
    { title: "Teams" },
    { title: "Sign In" },
  ];
  return (
    <header className="container mx-auto p-4 flex justify-between items-center backdrop-blur sticky top-0 z-20">
      <div className="w-36 max-md:w-20">
        <img src={logo} alt="logo" />
      </div>
      <nav className="">
        <ul className="flex gap-10 max-md:gap-5">
          {navLinks.map((link) => (
            <NavLink key={link.title}>{link.title}</NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
