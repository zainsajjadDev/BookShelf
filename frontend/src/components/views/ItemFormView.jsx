import React, { useState } from 'react'

export default function ItemForm({ initial = {}, onSubmit }){
  const [title, setTitle] = useState(initial.title || '')
  const [description, setDescription] = useState(initial.description || '')
  const [price, setPrice] = useState(initial.price || 0)
  const [category, setCategory] = useState(initial.category || '')
  const [imageUrl, setImageUrl] = useState(initial.imageUrl || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return alert('Title is required')
    if (price < 0) return alert('Price cannot be negative')
    onSubmit({ title, description, price: Number(price), category, imageUrl })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white p-6 rounded shadow">
      <label className="block mb-2">Title *</label>
      <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 mb-4 rounded" />

      <label className="block mb-2">Description</label>
      <textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full border p-2 mb-4 rounded" rows={4} />

      <label className="block mb-2">Price</label>
      <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full border p-2 mb-4 rounded" />

      <label className="block mb-2">Category</label>
      <input value={category} onChange={e=>setCategory(e.target.value)} className="w-full border p-2 mb-4 rounded" />

      <label className="block mb-2">Image URL</label>
      <input value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className="w-full border p-2 mb-4 rounded" />

      <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
    </form>
  )
}
