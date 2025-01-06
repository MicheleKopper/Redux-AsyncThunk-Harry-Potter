import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wizardAsyncThunk } from "../../store/modules/harryPotterSlice";
import { AppDispatch, Store } from "../../store";
import { Grid2 } from "@mui/material";
import { CardWizard } from "../Card/Card";

export function WizardList() {
  const dispatch = useDispatch<AppDispatch>();

  // Estado global
  const { list, loading } = useSelector((state: Store) => state.wizard);

  // Busca os personagens na página atual
  useEffect(() => {
    console.log("O useEffect foi disparado!"); // Log para verificar se o useEffect foi disparado
    dispatch(wizardAsyncThunk());
  }, [dispatch]);

  // Renderização
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Grid2>
      {list.length > 0 ? (
        list.map((wizard) => (
          <CardWizard
            key={wizard.id} // Adicione uma chave única
            id={wizard.id}
            name={wizard.name}
            image={wizard.image}
            wizard={wizard.wizard}
            house={wizard.house}
          />
        ))
      ) : (
        <p>Nenhum bruxo encontrado.</p>
      )}
    </Grid2>
  );
}
