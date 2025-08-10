import React from "react";
import ItemFormView from "../components/views/ItemFormView";
import { createItem } from "../api/itemService";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      await createItem(data);
      navigate("/items");
    } catch (err) {
      alert("Failed to add");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Add Book</h1>
      <ItemFormView onSubmit={handleSubmit} />
    </div>
  );
}
