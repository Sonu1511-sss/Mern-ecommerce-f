import React from "react";
import POPULAR from "../data/latest";

const NewCollection = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {POPULAR.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-contain p-4"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold">${item.new_price}</span>
                  <span className="line-through text-gray-400 text-sm">
                    ${item.old_price}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{item.category}</p>
              </div>

              {/* Removed the Add to Cart button here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
