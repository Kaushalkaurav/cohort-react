import { useForm } from 'react-hook-form';
import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext"; // adjust path


const CreateuserForm = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm ()
  const { user, setUser } = useContext(MyStore);

  const formSubmit = (data) => {
  console.log(data);

  setUser((prev) => [...prev, data]);

  reset();
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
      Create Account
    </h2>

    <form   onSubmit={handleSubmit(formSubmit)} className="space-y-5">
      <input 
       {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces is not allowed",
            },
          })}

        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
      {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
      {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
        type="tel"
        placeholder="Phone Number"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

      <input
       {...register("image", {
            required: "Image is required",
          })}
        type="url"
        placeholder="give image-url"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        Create User
      </button>
    </form>
  </div>
</div>
    </div>
  )
}

export default CreateuserForm;
