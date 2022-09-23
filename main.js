import { recipes } from "./js/data/recipes.js";
import { RecipeConstructor } from "./js/constructor/recipeConstructor2.js";
import { dropdown } from "./js/dropdown/dropdown.js";
import { dropdownItemsConstructor } from "./js/constructor/dropdownItems.js";

class App {
  constructor() {
    this.$recipesWrapper = document.querySelector(".cards-container");
    this.$tagWrapper = document.querySelector(".tags");
    this.$ingredientWrapper = document.getElementById("ingredient");
    this.$appareilWrapper = document.getElementById("appareil");
    this.$ustensilWrapper = document.getElementById("ustensil");
  }

  sortedRecipeAlp() {
    return recipes.sort((a, b) => a.name.localeCompare(b.name, "fr", { ignorePunctuation: true }));
  }

  printCardDom(recipes) {
    recipes.forEach((recipe) => {
      const recipeTemplate = new RecipeConstructor(recipe);
      this.$recipesWrapper.appendChild(recipeTemplate.getRecipe());
    });
  }

  printMaterial(materials) {
    const materialsTemplate = new dropdownItemsConstructor(materials);
    const Templates = materialsTemplate.getAllMaterials();

    this.$ingredientWrapper.appendChild(Templates[0]);
    this.$appareilWrapper.appendChild(Templates[1]);
    this.$ustensilWrapper.appendChild(Templates[2]);
  }

  allIngredients = () => {
    let ingredients = [];
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredients.push(ingredient.ingredient);
      });
    });
    let uniqueIngredients = [...new Set(ingredients)];
    uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

    return uniqueIngredients;
  };

  allAppareil() {
    let appareils = [];
    recipes.forEach((recipe) => {
      appareils.push(recipe.appliance);
    });
    let uniqueAppareils = [...new Set(appareils)];
    uniqueAppareils.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

    return uniqueAppareils;
  }

  allUstensil() {
    let ustensils = [];
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        ustensils.push(ustensil);
      });
    });
    let uniqueUstensil = [...new Set(ustensils)];
    uniqueUstensil.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

    return uniqueUstensil;
  }

  allMaterials() {
    let materials = {};
    materials.ingredients = this.allIngredients();
    materials.appareils = this.allAppareil();
    materials.ustensils = this.allUstensil();

    return materials;
  }

  main() {
    this.printCardDom(this.sortedRecipeAlp());

    this.printMaterial(this.allMaterials());

    dropdown();
  }
}
const app = new App();
app.main();
