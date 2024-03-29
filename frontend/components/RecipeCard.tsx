import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Recipe } from '../types/recipe';


const RecipeCard = ({ recipe }: { recipe:Recipe }) => { 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
        {/* Add more recipe details */}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
