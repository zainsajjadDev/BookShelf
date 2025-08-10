import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/items" className="font-bold text-xl">MERN CRUD</Link>
        <div className="space-x-4">
          <Link to="/items" className="hover:underline">Items</Link>
          <Link to="/add-item" className="hover:underline">Add Item</Link>
        </div>
      </div>
    </nav>
  )
}
