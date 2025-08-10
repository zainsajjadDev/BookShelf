import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    lowStock: 0,
    genres: 0,
    value: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        const books = res.data;
        const lowStockCount = books.filter((b) => b.stock < 5).length;
        const genreCount = new Set(books.map((b) => b.genre)).size;
        const totalValue = books.reduce((sum, b) => sum + b.price * b.stock, 0);

        setStats({
          totalBooks: books.length,
          lowStock: lowStockCount,
          genres: genreCount,
          value: totalValue,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white p-12 shadow-2xl w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              📚 BookShelf
            </h1>
            <p className="mb-6 text-lg">
              Manage your book collection effortlessly — add, edit, view details
              and track stock. Clean interface and fast performance.
            </p>
            <div className="flex gap-4">
              <Link
                to="/items"
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:scale-105 transform transition"
              >
                View Books
              </Link>
              <Link
                to="/add-item"
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:scale-105 transform transition"
              >
                Add Book
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded">
                  Total Books
                  <br />
                  <span className="font-bold text-2xl">{stats.totalBooks}</span>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  Low Stock
                  <br />
                  <span className="font-bold text-2xl">{stats.lowStock}</span>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  Genres
                  <br />
                  <span className="font-bold text-2xl">{stats.genres}</span>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  Value
                  <br />
                  <span className="font-bold text-2xl break-all">
                    ${stats.value.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
