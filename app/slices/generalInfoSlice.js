import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const initialState = {
  nom: '',
  prenom: '',
  titre: '',
  description: '',
  tele: '',
  linkedin: '',
  email: '',
  github: ''
};

const generalInfoSlice = createSlice({
  name: 'generalInfo',
  initialState,
  reducers: {
    setGeneralInfo: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});


export const { setGeneralInfo } = generalInfoSlice.actions;
export default generalInfoSlice.reducer;
