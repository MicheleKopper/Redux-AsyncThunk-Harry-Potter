import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wizardAsyncThunk } from "../../store/modules/harryPotterSlice";
import { AppDispatch, Store } from "../../store";
import { Box } from "@mui/material";
import { CardWizard } from "../Card/Card";

export function WizardList() {
  const dispatch = useDispatch<AppDispatch>();

  // Estado global
  const { list, loading } = useSelector((state: Store) => state.wizard);

  // Busca os personagens na página atual
  useEffect(() => {
    dispatch(wizardAsyncThunk());
  }, [dispatch]);

  // Renderização
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(3, 1fr)", 
        },
        gap: "16px", 
        padding: { xs: "16px", sm: "32px", md: "64px" }, 
        justifyContent:"center",
       
      }}
    >
      {list.length > 0 ? (
        list.map((wizard) => (
          <CardWizard
            key={wizard.id}
            id={wizard.id}
            name={wizard.name}
            image={wizard.image}
            wizard={wizard.wizard}
            house={wizard.house}
          />
        ))
      ) : (
        <p>No wizards found!</p>
      )}
    </Box>
  );
}
