import { configureStore } from '@reduxjs/toolkit';
import generalInfoReducer from './slices/generalInfoSlice';
import educationsReducer from './slices/educationsSlice';
import certificatesReducer from './slices/certificatesSlice';
import experiencesReducer from './slices/experiencesSlice';
import competencesReducer from './slices/competencesSlice';
import langagesReducer from './slices/langagesSlice';

export const store = configureStore({
  reducer: {
    generalInfo: generalInfoReducer,
    educations: educationsReducer,
    certificates: certificatesReducer,
    experiences: experiencesReducer,
    competences: competencesReducer,
    langages: langagesReducer
  },
});

export default store;
