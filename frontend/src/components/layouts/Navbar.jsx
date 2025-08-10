import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link to="/" className="text-2xl  font-extrabold text-white tracking-wider transition-colors duration-300 hover:text-indigo-400">
          Book<span className="text-indigo-400">Shelf</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            to="/items" 
            className="text-md font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300"
          >
            All Books
          </Link>
          <Link 
            to="/add-item" 
            className="text-sm px-4 py-2 md:px-5 md:py-2.5 bg-indigo-500 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Book
          </Link>
        </div>
      </div>
    </nav>
  );
}