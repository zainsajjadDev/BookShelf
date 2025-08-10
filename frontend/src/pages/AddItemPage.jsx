import React from 'react'
import ItemForm from '../components/views/ItemFormView'
import { createItem } from '../api/itemService'
import { useNavigate } from 'react-router-dom'

export default function AddItemPage(){
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    try {
      await createItem(data)
      navigate('/items')
    } catch (err) {
      alert('Failed to add item')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add Item</h1>
      <ItemForm onSubmit={handleSubmit} />
    </div>
  )
}
