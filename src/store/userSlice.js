import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALBUMS_API, POSTS_API, USERS_API } from "../config";

const getDataByUrl = (url, name) => {
  return createAsyncThunk(name, async function (_, thunkAPI) {
    const state = thunkAPI.getState();
    const id = state.app.selectedUserId;
    try {
      const response = await fetch(id ? url + id : url);
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const fetchUsers = getDataByUrl(USERS_API, "users/fetchUsers");
export const fetchAlbumsByUserId = getDataByUrl(
  ALBUMS_API,
  "users/fetchAlbumsByUserId"
);
export const fetchPostsByUserId = getDataByUrl(
  POSTS_API,
  "users/fetchPostsByUserId"
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const setPending = (state) => {
  state.status = "loading";
  state.error = null;
};

const userSlice = createSlice({
  name: "app",
  initialState: {
    users: [],
    albums: [],
    posts: [],
    status: null,
    error: null,
    showModal: false,
    selectedUserId: null,
  },
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUserId = action.payload;
    },
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: setPending,
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: setError,
    [fetchAlbumsByUserId.pending]: setPending,
    [fetchAlbumsByUserId.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.albums = action.payload;
    },
    [fetchAlbumsByUserId.rejected]: setError,
    [fetchPostsByUserId.pending]: setPending,
    [fetchPostsByUserId.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload;
    },
    [fetchPostsByUserId.rejected]: setError,
  },
});

export const { setShowModal, setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
