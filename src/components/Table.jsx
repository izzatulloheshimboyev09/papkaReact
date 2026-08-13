import React from "react";
import { useState } from "react";

import { users } from "../data/users";
import TableRow from "./TableRow";

function Table() {
  let [data, setdata] = useState(users);

  function handleDelete(id) {
    setdata(data.filter((user) => user.id != id));
  }

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100 border-b border-gray-200 text-left">
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            Avatar
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            First Name
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            Last Name
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">Age</th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            Email
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            Phone
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            City
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600">
            Profession
          </th>
          <th className="px-4 py-3 text-sm font-semibold text-gray-600 text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <TableRow key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
