import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { artistsApi } from "./apis/artistsApi";
import { changeSearchTerm, searchReducer } from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(artistsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useLazyGetArtistQuery } from "./apis/artistsApi";
export { store, changeSearchTerm };
