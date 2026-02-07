import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // Adding a unique ID or ensuring data is consistent for our removal logic
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    displayedPosts: [],
    loading: true,
    viewMode: 'grid', // 'grid' or 'list'
    currentPage: 1,
    postsPerPage: 6,
    selectedPost: null,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    removePost: (state, action) => {
      const postId = action.payload;
      // Remove from allPosts
      state.allPosts = state.allPosts.filter(post => post.id !== postId);
      // Re-calculate displayed posts for the current page
      const startIndex = (state.currentPage - 1) * state.postsPerPage;
      state.displayedPosts = state.allPosts.slice(startIndex, startIndex + state.postsPerPage);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      const startIndex = (state.currentPage - 1) * state.postsPerPage;
      state.displayedPosts = state.allPosts.slice(startIndex, startIndex + state.postsPerPage);
    },
    toggleViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
        // Initially show the first 6
        state.displayedPosts = action.payload.slice(0, 6);
        // Loading will be set to false after 5 seconds in the component
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLoading, setSelectedPost, removePost, setCurrentPage, toggleViewMode } = postsSlice.actions;
export default postsSlice.reducer;
