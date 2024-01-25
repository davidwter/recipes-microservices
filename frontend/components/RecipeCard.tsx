const RecipeCard = ({ recipe }) => {
    return (
      <div className="border rounded-lg p-4">
        <h3 className="font-bold">{recipe.title}</h3>
        <p>{recipe.description}</p>
        {/* Add more recipe details */}
      </div>
    );
  };
  
  export default RecipeCard;
  