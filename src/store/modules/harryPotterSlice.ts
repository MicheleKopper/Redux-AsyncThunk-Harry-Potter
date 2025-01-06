import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: string;
  house: string;
}

interface WizardApiResponse {
  id: string;
  name: string;
  image: string;
  wizard: boolean;
  house: string | null;
}

interface WizardState {
  list: Wizard[];
  loading: boolean;
  total: number;
  currentPage: number;
}

const initialState: WizardState = {
  list: [],
  loading: false,
  total: 0,
  currentPage: 1,
};

// Buscar os dados da API - CARD
export const wizardAsyncThunk = createAsyncThunk<Wizard[]>(
  "wizard/list",
  async () => {
    const response = await axios.get<WizardApiResponse[]>(
      "https://hp-api.onrender.com/api/characters"
    );

    const results: Wizard[] = response.data.map((wizard) => ({
      id: wizard.id,
      name: wizard.name,
      image: wizard.image,
      wizard: wizard.wizard ? "Sim" : "Não",
      house: wizard.house || "Não possui",
    }));

    return results;
  }
);

// Criação do slice
const wizardSlice = createSlice({
  name: "wizard",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(wizardAsyncThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(wizardAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.total = action.payload.length;
      });
  },
});

export const wizardReducer = wizardSlice.reducer;
