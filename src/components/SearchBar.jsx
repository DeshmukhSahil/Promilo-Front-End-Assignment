import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query); // Notify the parent component about the search query change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md p-4 bg-blue-200 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search products"
          />
          <div className="absolute inset-y-0 left-4 flex items-center">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m0 0l-6-6m6 6l-6-6M3 3l6 6m0 0l6 6m-6-6l6 6"
              />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 self-center"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
