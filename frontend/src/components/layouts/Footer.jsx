import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-3 mt-12 shadow-inner">
      <div className="container mx-auto text-sm text-gray-400">
        © {new Date().getFullYear()} BookShelf | All rights reserved.<br />
        
      </div>
    </footer>
  );
}