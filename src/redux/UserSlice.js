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
  },
});

export const { deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
