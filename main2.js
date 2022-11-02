import { recipes } from "./js/data/recipes.js";
import { RecipeConstructor } from "./js/constructor/recipeConstructor2.js";
import { dropdownItemsConstructor } from "./js/constructor/dropdownItems.js";
// import { dropdown, selectedTag } from "./js/utils/dropdown.js";
import { searchIngredientDropdown, searchAppareilDropdown, searchUstensilDropdown } from "./js/algoSearch/search2.js";
import { tagConstructor } from "./js/constructor/tagConstructor.js";
import { delTag } from "./js/utils/delTag.js";

const recipesWrapper = document.querySelector(".cards-container");
const ingredientWrapper = document.getElementById("ingredient");
const appareilWrapper = document.getElementById("appareil");
const ustensilWrapper = document.getElementById("ustensil");

let allRecipes = recipes;
let uniqueIngredients = [];
let uniqueAppareils = [];
let uniqueUstensils = [];
let materials = {};
let selectedTag = [];

//-------------dropdown----------------------------------

let tagWrapper = document.querySelector(".tags-container");

function dropdown() {
  const dropdown = document.querySelectorAll(".dropdown");
  const lists = document.querySelectorAll(".dropdown__list");
  const listContainer = document.querySelectorAll(".dropdown__list-container");
  const dropdownArrow = document.querySelectorAll(".dropdown__arrow");
  const listItems = document.querySelectorAll(".dropdown__list-item");
  const dropdownSelectedNode = document.querySelectorAll(".dropdown__arrow");

  const searchInputs = [
    document.getElementById("ingredient-search"),
    document.getElementById("appareil-search"),
    document.getElementById("ustensil-search"),
  ];

  function toggle(i) {
    if (lists[i] != lists[0] && lists[0].classList.contains("open")) {
      closeList();
    } else if (lists[i] != lists[1] && lists[1].classList.contains("open")) {
      closeList();
    } else if (lists[i] != lists[2] && lists[2].classList.contains("open")) {
      closeList();
    }

    lists[i].classList.toggle("open");
    lists[i].classList.toggle("grille");
    // dropdown[i].classList.toggle("radius");
    dropdown[i].classList.toggle("open_input");
    dropdownArrow[i].classList.toggle("expanded");
    listContainer[i].setAttribute("aria-expanded", lists[i].classList.contains("open"));
  }

  //quand on clique sur la fleche
  for (let i = 0; i < dropdownSelectedNode.length; i++) {
    dropdownSelectedNode[i].addEventListener("click", (e) => {
      toggle(i);
    });
  }
  //quand on clique dans l'input
  for (let i = 0; i < searchInputs.length; i++) {
    searchInputs[i].addEventListener("click", (e) => {
      if (lists[i].classList.contains("open")) {
        return;
      } else {
        toggle(i);
      }
    });
  }

  function closeList() {
    const expanded = document.querySelector(".open");
    // console.log(dropdownArrow);
    lists.forEach((list) => {
      list.classList.remove("open");
      list.classList.remove("grille");

      dropdownArrow.forEach((el) => {
        el.classList.remove("expanded");
      });
      dropdown.forEach((el) => {
        el.classList.remove("open_input");
      });
      listContainer.forEach((el) => {
        el.setAttribute("aria-expanded", false);
      });
    });
  }

  const addTag = () => {
    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const tagTemplate = new tagConstructor(e.target);
        tagWrapper.appendChild(tagTemplate.getTags());
        // console.log(tagTemplate);
        const newValue = tagTemplate.whitch.split("-")[1];
        tagTemplate.whitch = newValue;
        console.log(tagTemplate);
        selectedTag.push(tagTemplate);
        // console.log(selectedTag);
        printRecipeTagSearch();
        delTag();
        closeList();
        //mettre la valeur des inputs a l'etat initial
        document.querySelectorAll("input").forEach((input) => {
          input.value = "";
        });
      });
    });
  };
  addTag();
}

//-------------dropdown----------------------------------

function printCardDom() {
  recipes.forEach((recipe) => {
    const recipeTemplate = new RecipeConstructor(recipe);
    recipesWrapper.appendChild(recipeTemplate.getRecipe());
  });
}
printCardDom();

function allIngredients() {
  let ingredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.ingredient.toLowerCase());
    });
  });
  uniqueIngredients = [...new Set(ingredients)];
  materials.ingredients = uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
}
allIngredients();
// console.log(uniqueIngredients);

function allAppareil() {
  let appareils = [];
  recipes.forEach((recipe) => {
    appareils.push(recipe.appliance.toLowerCase());
  });
  uniqueAppareils = [...new Set(appareils)];
  materials.appareils = uniqueAppareils.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
}
allAppareil();

function allUstensil() {
  let ustensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.push(ustensil.toLowerCase());
    });
  });
  uniqueUstensils = [...new Set(ustensils)];
  materials.ustensils = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
}
allUstensil();

function printIngredient() {
  const materialsTemplate = new dropdownItemsConstructor(materials);
  const Templates = materialsTemplate.getAllMaterials();

  ingredientWrapper.appendChild(Templates[0]);
}

function printAppareil() {
  const materialsTemplate = new dropdownItemsConstructor(materials);
  const Templates = materialsTemplate.getAllMaterials();

  appareilWrapper.appendChild(Templates[1]);
}

function printUstensil() {
  const materialsTemplate = new dropdownItemsConstructor(materials);
  const Templates = materialsTemplate.getAllMaterials();

  ustensilWrapper.appendChild(Templates[2]);
}

function printMaterial() {
  printIngredient();
  printAppareil();
  printUstensil();
}
printMaterial();
dropdown();

searchIngredientDropdown(printIngredient, materials, uniqueIngredients, dropdown);
// searchIngredientDropdown(printIngredient, materials, uniqueIngredients, function () {
//   dropdown(selectedTag);
// });

searchAppareilDropdown(printAppareil, materials, uniqueAppareils, dropdown);

searchUstensilDropdown(printUstensil, materials, uniqueUstensils, dropdown);

function printRecipeTagSearch() {
  selectedTag.forEach((tag) => {
    // console.log(Object(tag).name);
    // console.log(Object(tag).whitch);
    let newRecipesToPrint = recipes.filter((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredient.ingredient.toLowerCase() === Object(tag).name.toLowerCase();
      });
    });
    console.log(newRecipesToPrint);
  });
}
