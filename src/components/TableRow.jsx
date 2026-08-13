import React from "react";
import Button from "./Button";

// user va handleDelete prop'larini qabul qilish uchun qo'shildi
function TableRow({ user, handleDelete }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-3 text-sm text-gray-700">
        <img
          src={user.avatar}
          alt={user.firstName}
          className="w-10 h-10 rounded-full"
        />
      </td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.firstName}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.lastName}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.age}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.phone}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.city}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.profession}</td>
      <td className="px-4 py-3 text-center">
        <Button variant={"secondary"} text="edit" />
        <Button
          variant={"danger"}
          text="delete"
          onClick={() => handleDelete(user.id)}
        />
      </td>
    </tr>
  );
}

export default TableRow;
