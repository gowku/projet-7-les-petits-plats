import { recipes } from "./js/data/recipes.js";
import { RecipeConstructor } from "./js/constructor/recipeConstructor.js";

class App {
  constructor() {
    // this.recetteApi = new Api("./js/data/recipes.js");
    this.$recipesWrapper = document.querySelector(".cards-container");
    this.$ingredientWrapper = document.querySelector(".card-description-bottom-ingredients");
  }

  async main() {
    console.log(recipes);

    recipes.forEach((recipe) => {
      const recipeTemplate = new RecipeConstructor(recipe);
      this.$recipesWrapper.appendChild(recipeTemplate.getRecipe());
      // getIngredient();
      // recipe.ingredients.forEach((ingredient) => {
      //   const ingredientTemplate = new RecipeConstructor(ingredient);
      //   this.$ingredientWrapper.appendChild(ingredientTemplate.getIngredient());
      // });
    });
  }
}
const app = new App();
app.main();
