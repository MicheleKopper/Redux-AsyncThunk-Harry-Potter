import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: string;
  house: string;
}

export function CardWizard({ name, image, wizard, house }: Wizard) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 150,
          height: "auto",
          objectFit: "cover", // Preenche o espaço mantendo proporção
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
        image={image}
        alt={name}
      />

      <CardContent
        sx={{
          padding: "16px", 
          display: "flex",
          flexDirection: "column", 
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="h6">Wizard: {wizard}</Typography>

        <Typography variant="h6">House: {house}</Typography>
      </CardContent>
    </Card>

    
  );
}
