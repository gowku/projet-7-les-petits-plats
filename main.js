import { recipes } from "./js/data/recipes.js";
import { RecipeConstructor } from "./js/constructor/recipeConstructor2.js";

class App {
  constructor() {
    this.$recipesWrapper = document.querySelector(".cards-container");
  }

  printCardDom(recipes) {
    recipes.forEach((recipe) => {
      const recipeTemplate = new RecipeConstructor(recipe);
      this.$recipesWrapper.appendChild(recipeTemplate.getRecipe());
    });
  }

  sortedRecipeAlp() {
    return recipes.sort((a, b) => a.name.localeCompare(b.name, "fr", { ignorePunctuation: true }));
  }

  main() {
    const dropdown = document.querySelectorAll(".dropdown");
    const list = document.querySelectorAll(".dropdown__list");
    const listContainer = document.querySelectorAll(".dropdown__list-container");
    const dropdownArrow = document.querySelectorAll(".dropdown__arrow");
    const listItems = document.querySelectorAll(".dropdown__list-item");
    const dropdownSelectedNode = document.querySelectorAll(".dropdown__arrow");
    const listItemIds = [];
    // const toRemove = document.querySelector("#dropdown__selected");

    for (let i = 0; i < dropdownSelectedNode.length; i++) {
      dropdownSelectedNode[i].addEventListener("click", (e) => {
        list[i].classList.toggle("open");
        dropdown[i].classList.toggle("radius");
        dropdown[i].classList.toggle("open_input");
        dropdownArrow[i].classList.toggle("expanded");
        listContainer[i].setAttribute("aria-expanded", list[i].classList.contains("open"));
      });
    }
    listItems.forEach((item) => listItemIds.push(item.id));

    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        dropdown.classList.toggle("radius");
        // setSelectedListItem(e);
        closeList();
      });
    });
    function closeList() {
      list.classList.remove("open");
      // toRemove.remove();
      // dropdownSelectedNode.innerHTML = p;
      dropdownArrow.classList.remove("expanded");
      listContainer.setAttribute("aria-expanded", false);
    }

    this.printCardDom(this.sortedRecipeAlp());
  }
}
const app = new App();
app.main();
