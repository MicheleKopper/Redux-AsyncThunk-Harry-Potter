import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  itemsList: Wizard[];
  loading: boolean;
  total: number;
  currentPage: number;
  itemsPage: number;
}

const initialState: WizardState = {
  list: [],
  itemsList: [],
  loading: false,
  total: 0,
  currentPage: 1,
  itemsPage: 18,
};

// Buscar os dados da API
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
  reducers: {
    // Define a página atual e recalcula os itens exibidos
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;

      const startIndex = (state.currentPage - 1) * state.itemsPage;
      const endIndex = startIndex + state.itemsPage;
      state.itemsList = state.list.slice(startIndex, endIndex);
    },
  },
  extraReducers(builder) {
    builder

      .addCase(wizardAsyncThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(wizardAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.total = action.payload.length;

        // Calcula os items da primeira página
        state.itemsList = state.list.slice(0, state.itemsPage);
      });
  },
});

// Action
export const { setPage } = wizardSlice.actions;

// Reducer
export const wizardReducer = wizardSlice.reducer;
