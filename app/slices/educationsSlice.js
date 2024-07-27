import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { annee: '', etablissement: '', diplome: '', statut: 'terminé' }
];

const educationsSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {
    setEducationsList: (state, action) => {
        return [...action.payload];
    }
  },
});

export const { setEducationsList } = educationsSlice.actions;
export default educationsSlice.reducer;
