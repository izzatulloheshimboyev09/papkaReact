import React, { useState, useEffect } from "react";
import Button from "./Button";

function UserModal({ isOpen, onClose, onSave, currentUser }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    avatar: "https://via.placeholder.com/150",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        phone: "",
        city: "",
        profession: "",
        avatar: "https://via.placeholder.com/150",
      });
    }
  }, [currentUser, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {currentUser
            ? "Foydalanuvchini tahrirlash"
            : "Yangi foydalanuvchi qo'shish"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="firstName"
            placeholder="Ism"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Familiya"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Yosh"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="city"
            placeholder="Shahar"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="profession"
            placeholder="Kasbi"
            value={formData.profession}
            onChange={handleChange}
            className="w-full border p-2 rounded outline-none focus:border-blue-500"
          />

          <div className="flex justify-end space-x-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 font-semibold"
            >
              Bekor qilish
            </button>
            <Button
              variant="primary"
              text={currentUser ? "Saqlash" : "Qo'shish"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
