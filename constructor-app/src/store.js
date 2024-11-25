import { configureStore } from "@reduxjs/toolkit";
import constructorsSlice from "./features/constructorSlice";
import applicationsSlice from "./features/applicationSlice";


const store = configureStore({
  reducer: {
    applications: applicationsSlice.reducer,
    constructors: constructorsSlice.reducer,
  },
});

export default store;
