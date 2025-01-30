import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Coffee Hub</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/addCoffee" className="hover:text-gray-400">
            Add Coffee
          </Link>
          <Link to="/signIn" className="hover:text-gray-400">
            Sign In
          </Link>
          <Link to="/signUp" className="hover:text-gray-400">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
