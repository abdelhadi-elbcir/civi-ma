import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    titre: "",
    entreprise: "",
}];

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
    setCertificatsList: (state, action) => {
        console.log(action.payload);
        return [...action.payload ];
    }
  },
});

export const { setCertificatsList } = certificatesSlice.actions;
export default certificatesSlice.reducer;
