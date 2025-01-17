import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          <div className="hidden sm:flex space-x-8">
            <button 
              onClick={() => scrollToSection("about")} 
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="nav-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="nav-link"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;