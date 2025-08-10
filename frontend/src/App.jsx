import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import ViewItemsPage from './pages/ViewItemsPage'
import AddItemPage from './pages/AddItemPage'
import EditItemPage from './pages/EditItemPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/items" replace />} />
          <Route path="/items" element={<ViewItemsPage />} />
          <Route path="/items/:id" element={<HomePage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
