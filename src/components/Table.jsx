import React, { useState } from "react";
import { users as initialUsers } from "../data/users";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/UserSlice";

function Table() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  function handleDelete(id) {
    dispatch(deleteUser(id));
  }

  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full text-left table-auto border-collapse border border-slate-300 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-blue-700 text-white uppercase text-xs tracking-wider">
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
            <TableRow key={user.id} user={user} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
