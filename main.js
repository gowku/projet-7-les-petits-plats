import { recipes } from "./js/data/recipes.js";
import { RecipeConstructor } from "./js/constructor/recipeConstructor2.js";
import { dropdownItemsConstructor } from "./js/constructor/dropdownItems.js";
import { tagConstructor } from "./js/constructor/tagConstructor.js";
// import { search } from "./js/algoSearch/search.js";
import { searchIngredientDropdown } from "./js/algoSearch/search2.js";

class App {
  constructor() {
    this.$recipesWrapper = document.querySelector(".cards-container");
    this.$tagWrapper = document.querySelector(".tags-container");
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
        ingredients.push(ingredient.ingredient.toLowerCase());
      });
    });
    let uniqueIngredients = [...new Set(ingredients)];
    uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

    return uniqueIngredients;
  };

  allAppareil() {
    let appareils = [];
    recipes.forEach((recipe) => {
      appareils.push(recipe.appliance.toLowerCase());
    });
    let uniqueAppareils = [...new Set(appareils)];
    uniqueAppareils.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));

    return uniqueAppareils;
  }

  allUstensil() {
    let ustensils = [];
    recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        ustensils.push(ustensil.toLowerCase());
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

  dropdown() {
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
      }
      if (lists[i] != lists[1] && lists[1].classList.contains("open")) {
        closeList();
      }
      if (lists[i] != lists[2] && lists[2].classList.contains("open")) {
        closeList();
      }

      lists[i].classList.toggle("open");
      lists[i].classList.toggle("grille");
      dropdown[i].classList.toggle("radius");
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

    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const tagTemplate = new tagConstructor(e.target);
        this.$tagWrapper.appendChild(tagTemplate.getTags());
        this.delTag();
        closeList();
      });
    });
  }

  delTag() {
    const delBtn = document.querySelectorAll(".tag");
    console.log(delBtn);
    delBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.closest(".tag").remove();
      });
    });
  }

  main() {
    this.printCardDom(this.sortedRecipeAlp());

    this.printMaterial(this.allMaterials());
    // console.log(this.allMaterials());

    this.dropdown();

    //search.js
    // search(this.allMaterials().ingredients);
    // console.log(search(this.allMaterials()));

    //search2.js
    searchIngredientDropdown(this.allMaterials());
  }
}
const app = new App();
app.main();
