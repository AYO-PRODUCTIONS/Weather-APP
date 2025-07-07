import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-400 p-5">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-white"><Link to="/">Weather App</Link></div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex gap-10 text-[18px] text-white">
          <Link to="/" className="hover:text-blue-900">Home</Link>
          <Link to="/forecast" className="hover:text-blue-900">Forecast</Link>
          <Link to="/about" className="hover:text-blue-900">About</Link>
        </div>
      </div>

      {/* Mobile Menu with Slide + Fade Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
          menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-white text-[18px] mt-4">
          <Link to="/" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/forecast" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>Forecast</Link>
          <Link to="/about" className="hover:text-blue-900" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
