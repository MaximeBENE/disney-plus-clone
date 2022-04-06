import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import setMovies from "../features/movies/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: setMovies,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
