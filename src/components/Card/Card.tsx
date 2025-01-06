import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

// - Conter foto do personagem
// - Informar se o personagem é bruxo ou não (em português)
// - Informar casa, caso não tenha deve colocar “Não Possui”



interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: string;
  house: string;
}

export function CardWizard({ id, name, image, wizard, house }: Wizard) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Card
        sx={{
          width: 250,
          height: "auto",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "contain", // Mantém a proporção da imagem dentro do espaço
            }}
            image={image}
            alt={name}
          />

          <CardContent>
            <Grid2
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Name: {name}
              </Typography>

              <Typography variant="h6"># {id}</Typography>
            </Grid2>

            <Typography variant="subtitle1">
              Wizard: {wizard} | House: {house}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
