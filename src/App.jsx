import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemForm from "./pages/ItemForm";
import ItemList from "./pages/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const apiUrl =
          window.location.hostname === "localhost"
            ? "http://localhost:5000"
            : import.meta.env.VITE_API_URL;

        const response = await axios.get(`${apiUrl}/api/items`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        alert("Failed to fetch items");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleItemAdded = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <ItemList
                  items={items}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  loading={loading}
                />
              }
            />
            <Route
              path="/add-item"
              element={<ItemForm handleItemAdded={handleItemAdded} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
