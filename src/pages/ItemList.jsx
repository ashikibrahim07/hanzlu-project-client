import React from "react";

const ItemList = ({ items, searchTerm, setSearchTerm, loading }) => {
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="py-8 mt-10">
        <div className="container mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full shadow-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {loading ? (
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 rounded-lg object-fill mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4 h-35 overflow-hidden">
                    {item.description}
                  </p>
                  <p className="text-lg font-medium text-gray-800">
                    Price:{" "}
                    <span className="text-blue-600">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </p>
                  <button className="mt-4 cursor-pointer w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                    Add to Cart {/*PLACEHOLDER BUTTON*/}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemList;
