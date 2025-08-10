import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getItems, deleteItem } from '../api/itemService'

export default function ViewItemsPage(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = async () => {
    try {
      setLoading(true)
      const res = await getItems()
      setItems(res.data)
    } catch (err) {
      setError(err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ fetchItems() }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await deleteItem(id)
      setItems(prev => prev.filter(i => i._id !== id))
    } catch (err) {
      alert('Failed to delete')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div className="text-red-600">{error}</div>

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item._id} className="border rounded p-4 bg-white">
            <img 
              src={item.imageUrl || `https://picsum.photos/400/300?random=${item._id}`} 
              alt={item.title} 
              className="h-40 w-full object-cover mb-2" 
            />
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.category} • ${item.price}</p>
            <p className="mt-2 text-gray-700">{item.description?.slice(0, 100)}</p>
            <div className="mt-3 flex gap-2">
              <Link to={`/items/${item._id}`} className="px-2 py-1 bg-indigo-600 text-white rounded">View</Link>
              <Link to={`/edit-item/${item._id}`} className="px-2 py-1 bg-yellow-400 rounded">Edit</Link>
              <button onClick={()=>handleDelete(item._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
