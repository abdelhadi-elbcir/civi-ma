import { createSlice } from '@reduxjs/toolkit';

const initialState = [''];

const competencesSlice = createSlice({
  name: 'competences',
  initialState,
  reducers: {
    setCompetencesList: (state, action) => {
      return [...action.payload];
    }
  },
});

export const { setCompetencesList } = competencesSlice.actions;
export default competencesSlice.reducer;
