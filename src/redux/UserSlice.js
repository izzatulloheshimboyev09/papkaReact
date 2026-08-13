import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/users";

const initialState = {
  users: users,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      const nextId =
        state.users.length > 0
          ? Math.max(...state.users.map((u) => Number(u.id) || 0)) + 1
          : 1;

      // unshift emas, push ishlatamiz:
      state.users.push({
        id: nextId,
        ...action.payload,
      });
    },
    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { deleteUser, addUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
