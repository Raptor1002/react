import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submittedData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to store the submitted form data
    setFormData: (state, action) => {
      state.submittedData = action.payload;
    },
    // Optional: Action to clear the data
    clearFormData: (state) => {
      state.submittedData = null;
    }
  },
});

export const { setFormData, clearFormData } = userSlice.actions;
export default userSlice.reducer;