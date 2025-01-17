import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          <div className="hidden sm:flex space-x-8">
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#projects" className="nav-link">Projects</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;