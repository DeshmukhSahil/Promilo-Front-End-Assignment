import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <header className="antialiased bg-gray-200">
      <nav className="bg-gray-200 flex items-center justify-between border-b-2 drop-shadow-xl px-4 lg:px-6 py-2.5">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">
              Shop With US @...
            </span>
          </a>
        </div>

        <img src={logo} className="h-40 w-40 lg:h-40 lg:w-40" alt="FlowBite Logo" />

        <div className="lg:hidden"> {/* Hidden on large screens */}
          <button onClick={handleClick} className="text-blue-700 font-poppins relative">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center ml-4"> {/* Visible on large screens */}
          <button
            onClick={handleClick}
            className="bg-blue-700 text-white font-poppins px-5 py-2 rounded-md hover:bg-blue-800 relative"
          >
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            <span className="hidden lg:inline absolute top-full text-xs font-large font-poppins left-1/2 transform -translate-x-1/2 text-black lg:text-xs mr-2">
              <strong>About Us</strong>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
