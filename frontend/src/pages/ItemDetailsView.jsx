import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItem } from "../api/itemService";

export default function ItemDetailsView() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getItem(id);
        setItem(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Not found</div>;

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-gray-50 rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        {item.title}
      </h1>
      <p className="text-xl text-gray-700 mb-4">By: {item.author}</p>
      <hr className="my-6 border-gray-300" />
      <p className="text-gray-800 leading-relaxed mb-4">
        <span className="font-semibold text-gray-900">Description:</span>{" "}
        {item.description}
      </p>
      <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
        <p>
          <span className="font-medium text-gray-800">Genre:</span>{" "}
          {item.genre}
        </p>
        <p>
          <span className="font-medium text-gray-800">Price:</span> $
          {item.price}
        </p>
        <p>
          <span className="font-medium text-gray-800">Stock:</span>{" "}
          {item.stock}
        </p>
      </div>
      <div className="flex gap-4 mt-8">
        <Link
          to={`/edit-item/${item._id}`}
          className="flex-1 text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Edit Item
        </Link>
        <Link
          to="/items"
          className="flex-1 text-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}