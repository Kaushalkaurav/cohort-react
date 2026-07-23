import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const UserCard = () => {
  const { user } = useContext(MyStore);
   
  return (
    <div className="p-5 flex flex-wrap gap-6 justify-center">

      {user.map((item, index) => (
        <div
          key={index}
          className="max-w-sm w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>

          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-2">
              📧 {item.email}
            </p>

            <p className="text-gray-500 mt-1">
              📱 {item.mobile}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
              Update
            </button>

            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default UserCard;
