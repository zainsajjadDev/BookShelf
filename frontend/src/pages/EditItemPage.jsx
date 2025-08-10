import React, { useEffect, useState } from 'react'
import ItemForm from '../components/views/ItemFormView'
import { getItem, updateItem } from '../api/itemService'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditItemPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const res = await getItem(id)
        setItem(res.data)
      }catch(err){ alert('Failed to load item') }
      setLoading(false)
    }
    fetch()
  },[id])

  const handleSubmit = async (data) => {
    try {
      await updateItem(id, data)
      navigate('/items')
    } catch (err) { alert('Failed to update') }
  }

  if (loading) return <div>Loading...</div>
  if (!item) return <div>Item not found</div>

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Item</h1>
      <ItemForm initial={item} onSubmit={handleSubmit} />
    </div>
  )
}
