export const addRecentRecipe = (recipe, navigate) => {
  const recent = JSON.parse(localStorage.getItem('recentDish')) || [];
  const filtered = recent.filter(d => d.id !== recipe.id);

  filtered.push(recipe);

  if (filtered.length > 3) {
    filtered.shift();
  }

  localStorage.setItem('recentDish', JSON.stringify(filtered));

  navigate(`/recipes/${recipe.id}`);
};
