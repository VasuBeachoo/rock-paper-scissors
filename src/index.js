import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
