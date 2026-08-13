import React, { useState } from "react";
import TableRow from "./TableRow";
import Button from "./Button";
import UserModal from "./UserModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, addUser, editUser } from "../redux/UserSlice";

function Table() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleOpenAddModal = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (userData) => {
    if (selectedUser) {
      dispatch(editUser(userData));
    } else {
      dispatch(addUser(userData));
    }
  };

  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          Foydalanuvchilar Ro'yxati
        </h1>
        <Button
          variant="primary"
          text="+ Qo'shish"
          onClick={handleOpenAddModal}
        />
      </div>

      <table className="w-full text-left table-auto border-collapse border border-slate-300 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-white uppercase text-xs tracking-wider">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Rasm</th>
            <th className="py-3 px-4">Ism</th>
            <th className="py-3 px-4">Familiya</th>
            <th className="py-3 px-4">Yosh</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Telefon</th>
            <th className="py-3 px-4">Shahar</th>
            <th className="py-3 px-4">Kasbi</th>
            <th className="py-3 px-4 text-center">Amallar</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              handleDelete={handleDelete}
              handleEdit={handleOpenEditModal}
            />
          ))}
        </tbody>
      </table>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveUser}
        currentUser={selectedUser}
      />
    </div>
  );
}

export default Table;
