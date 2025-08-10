import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getItem } from '../api/itemService'

export default function HomePage(){
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const res = await getItem(id)
        console.log(res.data)
        setItem(res.data)
      }catch(err){ console.error(err) }
      setLoading(false)
    }
    fetch()
  },[id])

  if (loading) return <div>Loading...</div>
  if (!item) return <div>Not found</div>

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <img src={item.imageUrl || 'https://via.placeholder.com/800x300'} alt="" className="w-full h-64 object-cover rounded" />
      <h1>There is no </h1>
      <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
      <p className="text-gray-600">{item.category} • ${item.price}</p>
      <p className="mt-4 text-gray-800">{item.description}</p>
      <div className="mt-4">
        <Link to={`/edit-item/${item._id}`} className="px-4 py-2 bg-yellow-400 rounded mr-2">Edit</Link>
        <Link to="/items" className="px-4 py-2 bg-indigo-600 text-white rounded">Back</Link>
      </div>
    </div>
  )
}
