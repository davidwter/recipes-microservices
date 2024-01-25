import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  // Sample recipe data (replace with real data later)
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper." },
    { id: 2, title: "Chicken Tikka Masala", description: "Grilled chunks of chicken enveloped in a creamy spiced tomato sauce." },
    // ... more recipes
  ];

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">Recipe Recommender</h1>

        {/* Search bar or other content goes here */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
