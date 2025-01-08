import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Wizard {
  id: string;
  name: string;
  image: string;
  wizard: string;
  house: string;
}

export function CardWizard({ name, image, wizard, house }: Wizard) {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="h6">Wizard: {wizard}</Typography>

        <Typography variant="h6">House: {house}</Typography>
      </CardContent>
    </Card>
  );
}
