import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems, deleteItem } from "../api/itemService";

export default function ViewItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await getItems();
      setItems(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      alert("Delete failed. Please try again.");
    }
  };

  if (loading) return <div className="text-center text-xl p-8">Loading...</div>;
  if (items.length === 0)
    return <div className="text-center text-xl p-8">No items found. Please add a new item.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Available Books</h1>
        <Link
          to="/add-item"
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add New Book
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Author:</span> {item.author}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <span className="font-semibold">Description:</span>{" "}
                {item.description?.length > 100 
                  ? `${item.description.slice(0, 100)}...` 
                  : item.description}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Genre:</span> {item.genre}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Stock:</span> {item.stock}
              </p>
              
              <p className="text-lg font-bold text-green-600 mb-1">
                <span className="text-sm font-semibold text-gray-700">Price:</span> ${item.price}
              </p>
              <div className="flex justify-start gap-3 mt-5">
                <Link
                  to={`/items/${item._id}`}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </Link>
                <Link
                  to={`/edit-item/${item._id}`}
                  className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}