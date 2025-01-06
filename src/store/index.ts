import { configureStore } from "@reduxjs/toolkit";
import { wizardReducer } from "./modules/harryPotterSlice";

// Configuração do store
export const store = configureStore({
  reducer: {
    wizard: wizardReducer
  },
});

console.log("Store configurado:", store.getState()); 

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
