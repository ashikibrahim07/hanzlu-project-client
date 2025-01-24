import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ItemForm = ({ handleItemAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !price || !imageUrl) {
      alert("Please fill in all fields");
      return;
    }

    const newPrice = parseFloat(price);
    if (isNaN(newPrice) || newPrice <= 0) {
      alert("Price must be a positive number");
      return;
    }

    try {
      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : import.meta.env.VITE_API_URL;

      const response = await axios.post(`${apiUrl}/api/items`, {
        title,
        description,
        price: newPrice,
        imageUrl,
      });

      handleItemAdded(response.data);

      alert("Item added successfully!");

      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");

      navigate("/");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item");
    }
  };

  return (
    <>
      <div className="py-8 mt-10">
        <div className="container mx-auto">
          <div className="border rounded-lg shadow-lg p-8 bg-white max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Add New Item
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 max-w-md mx-auto">
                {" "}
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6 max-w-md mx-auto">
                {" "}
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6 max-w-md mx-auto">
                {" "}
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6 max-w-md mx-auto">
                {" "}
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Upload Image
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-md p-1 text-gray-500 border border-gray-300 rounded-md shadow-sm hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <p className="mt-2 text-sm text-gray-600">
                  Supported formats: JPEG, PNG, GIF. Max size: 5MB.
                </p>
              </div>
              {imageUrl && (
                <div className="mt-4">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-32 h-32 rounded-md object-cover"
                  />
                </div>
              )}
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemForm;
