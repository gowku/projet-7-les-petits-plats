import { recipes } from "../data/recipes.js";

export function search() {
  console.log(recipes);
  const searchInputs = [
    document.getElementById("total"),
    document.getElementById("ingredient-search"),
    document.getElementById("appareil-search"),
    document.getElementById("ustensil-search"),
  ];
  console.log(searchInputs);
  // console.log(searchInputs.value);

  let recipeWithDouble = [];
  let recipeResult = [];
  let ingredientItems = [];
  let appareilItems = [];
  let ustensilItems = [];

  const searchIngredient = (inputValue) => {
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (ingredient.ingredient.toLowerCase().includes(inputValue.toLowerCase())) {
          recipeWithDouble.push(recipe);
        }
      });
    });
  };

  const searchAppareil = (inputValue) => {
    recipes.forEach((recipe) => {
      if (recipe.appliance.toLowerCase().includes(inputValue.toLowerCase())) {
        recipeWithDouble.push(recipe);
      }
    });
  };

  const searchUstensil = (inputValue) => {
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if (ustensil.toLowerCase().includes(inputValue.toLowerCase())) {
          recipeWithDouble.push(recipe);
        }
      });
    });
  };

  const searchTitle = (inputValue) => {
    recipes.forEach((recipe) => {
      if (recipe.name.toLowerCase().includes(inputValue.toLowerCase())) {
        recipeWithDouble.push(recipe);
      }
    });
  };

  searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (input.value.length >= 3) {
        // console.log(input.value);
        console.log(input.id);

        switch (input.id) {
          case "total":
            searchIngredient(input.value);
            searchAppareil(input.value);
            searchUstensil(input.value);
            searchTitle(input.value);

            recipeResult = [...new Set(recipeWithDouble)];
            console.log(recipeResult);

            break;
          case "ingredient-search":
            searchIngredient(input.value);

            recipeResult = [...new Set(recipeWithDouble)];
            console.log(recipeResult);

            const recipeOnScreen = document.querySelectorAll("article");
            console.log(recipeOnScreen);
            printCardDom(recipeResult);

            break;
          case "appareil-search":
            searchAppareil(input.value);

            recipeResult = [...new Set(recipeWithDouble)];
            console.log(recipeResult);
            break;
          case "ustensil-search":
            searchUstensil(input.value);

            recipeResult = [...new Set(recipeWithDouble)];
            console.log(recipeResult);
            break;

          default:
            break;
        }
      }
    });
  });
}
