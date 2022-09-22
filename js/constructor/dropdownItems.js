export class dropdownItemsConstructor {
  constructor(elements) {
    this.ingredients = elements.ingredients;
    this.appareils = elements.appareils;
    this.ustensils = elements.ustensils;
    this.$ingredientWrapper = document.getElementById("ingredient");
    this.$appareilWrapper = document.getElementById("appareil");
    this.$ustensilWrapper = document.getElementById("ustensil");
  }

  getIngredientList() {
    const ul = document.createElement("ul");
    ul.classList.add("dropdown__list grille color");
    ul.setAttribute("aria-hidden", true);

    this.ingredients.forEach(ingredient, (index) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("id", "option-[${index}]");
    });
  }
  getAppareilList() {}
  getUstensilList() {}
}
