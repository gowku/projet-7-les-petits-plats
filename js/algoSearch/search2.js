export function searchIngredientDropdown(allMaterials) {
  let ingredientInDropdown;
  document.getElementById("ingredient-search").addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      ingredientInDropdown = allMaterials.ingredients.filter((ingredient) => ingredient.includes(e.target.value.toLowerCase()));
      // searchMaterials.ingredients.push(ingredientInDropdown);
      console.log(ingredientInDropdown);
    }
  });
}
