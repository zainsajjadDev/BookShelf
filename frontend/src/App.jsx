import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/HomePage';
import ViewItemsPage from './pages/ViewItemsPage';
import ItemDetailsView from './pages/ItemDetailsView';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ViewItemsPage />} />
          <Route path="/items/:id" element={<ItemDetailsView />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
