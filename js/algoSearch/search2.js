// import { recipes } from "../data/recipes.js";
// import { App } from "../../main.js";
// export function searchIngredientDropdown(allMaterials) {
//   let ingredientInDropdown;
//   document.getElementById("ingredient-search").addEventListener("input", (e) => {
//     if (e.target.value.length >= 3) {
//       ingredientInDropdown = allMaterials.ingredients.filter((ingredient) => ingredient.includes(e.target.value.toLowerCase()));
//       // searchMaterials.ingredients.push(ingredientInDropdown);
//       console.log(ingredientInDropdown);
//     }
//   });
// }

// export let ingredientInDropdown;

// export function searchIngredientDropdown(ingredients) {
//   console.log(ingredients);
//   document.getElementById("ingredient-search").addEventListener("input", (e) => {
//     if (e.target.value.length >= 3) {
//       document.getElementById("ingredient").children[0].remove();

//       let ingredientInDropdown = ingredients.filter((ingredient) => ingredient.includes(e.target.value.toLowerCase()));
//       // const filteredIngredientsInDropdown = new App.printMaterials();
//       // searchMaterials.ingredients.push(ingredientInDropdown);
//       // console.log(ingredientInDropdown);
//       return ingredientInDropdown;
//     }
//   });
// }
// searchIngredientDropdown();

export function searchIngredientDropdown(printIngredient, materials, uniqueIngredients, dropdown) {
  document.getElementById("ingredient-search").addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      // document.getElementById("ingredient").remove();
      let listItemsIngredients = document.querySelectorAll(".dropdown__list")[0].childNodes;
      while (listItemsIngredients.length != 0) {
        listItemsIngredients.forEach((child) => {
          child.remove();
        });
      }
      document.querySelectorAll(".dropdown__list")[0].remove();
      materials.ingredients = uniqueIngredients.filter((ingredient) => ingredient.includes(e.target.value.toLowerCase()));
      // console.log(materials);

      printIngredient();
      document.querySelectorAll(".dropdown__list")[0].classList.add("open");
      document.querySelectorAll(".dropdown__list")[0].classList.add("grille");
      dropdown();
    }
  });
}

export function searchAppareilDropdown(printAppareil, materials, uniqueAppareils, dropdown) {
  document.getElementById("appareil-search").addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      // document.getElementById("ingredient").remove();
      let listItemsAppareil = document.querySelectorAll(".dropdown__list")[1].childNodes;
      while (listItemsAppareil.length != 0) {
        listItemsAppareil.forEach((child) => {
          child.remove();
        });
      }
      document.querySelectorAll(".dropdown__list")[1].remove();
      materials.appareils = uniqueAppareils.filter((appareil) => appareil.includes(e.target.value.toLowerCase()));
      console.log(materials);

      printAppareil();

      document.querySelectorAll(".dropdown__list")[1].classList.add("open");
      document.querySelectorAll(".dropdown__list")[1].classList.add("grille");
      dropdown();
    }
  });
}
export function searchUstensilDropdown(printUstensil, materials, uniqueUstensils, dropdown) {
  document.getElementById("ustensil-search").addEventListener("input", (e) => {
    if (e.target.value.length >= 3) {
      // document.getElementById("ingredient").remove();
      let listItemsUstensil = document.querySelectorAll(".dropdown__list")[2].childNodes;
      while (listItemsUstensil.length != 0) {
        listItemsUstensil.forEach((child) => {
          child.remove();
        });
      }
      document.querySelectorAll(".dropdown__list")[2].remove();
      materials.ustensils = uniqueUstensils.filter((ustensil) => ustensil.includes(e.target.value.toLowerCase()));
      console.log(materials);

      printUstensil();

      document.querySelectorAll(".dropdown__list")[2].classList.add("open");
      document.querySelectorAll(".dropdown__list")[2].classList.add("grille");
      dropdown();
    }
  });
}
