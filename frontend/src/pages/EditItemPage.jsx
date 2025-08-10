import React, { useEffect, useState } from "react";
import ItemFormView from "../components/views/ItemFormView";
import { getItem, updateItem } from "../api/itemService";
import { useParams, useNavigate } from "react-router-dom";

export default function EditItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getItem(id);
        setItem(res.data);
      } catch (err) {
        alert("Load failed");
      }
      setLoading(false);
    };
    fetch();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await updateItem(id, data);
      navigate("/items");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center" >Edit Book</h1>
      <ItemFormView initial={item} onSubmit={handleSubmit} />
    </div>
  );
}
