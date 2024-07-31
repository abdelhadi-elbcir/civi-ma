import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    langage: "",
    niveau: "",
}];

const langagesSlice = createSlice({
  name: 'langages',
  initialState,
  reducers: {
    setLangagesList: (state, action) => {
      return [...action.payload];
    }
  },
});

export const { setLangagesList } = langagesSlice.actions;
export default langagesSlice.reducer;
