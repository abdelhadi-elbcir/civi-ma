import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { annee: '', entreprise: '', poste: '', description: '' }
];

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    setExperiencesList: (state, action) => {
      return [...action.payload];
    }
  },
});

export const { setExperiencesList } = experiencesSlice.actions;
export default experiencesSlice.reducer;
