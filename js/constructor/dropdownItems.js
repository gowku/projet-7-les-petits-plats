export class dropdownItemsConstructor {
  constructor(elements) {
    this.elements = elements;
    this.ingredients = elements.ingredients;
    this.appareils = elements.appareils;
    this.ustensils = elements.ustensils;
  }

  getIngredientList() {
    const ulIngredient = document.createElement("ul");
    ulIngredient.classList.add("dropdown__list", "color");
    ulIngredient.setAttribute("aria-hidden", true);

    this.ingredients.forEach((ingredient, i) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("id", `option-ingredient-${i}`);
      li.textContent = ingredient;
      ulIngredient.appendChild(li);
    });
    return ulIngredient;
  }
  getAppareilList() {
    const ulAppareil = document.createElement("ul");
    ulAppareil.classList.add("dropdown__list", "color");
    ulAppareil.setAttribute("aria-hidden", true);

    this.appareils.forEach((appareil, i) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("id", `option-appareil-${i}`);
      li.textContent = appareil;
      ulAppareil.appendChild(li);
    });
    return ulAppareil;
  }
  getUstensilList() {
    const ulUstensil = document.createElement("ul");
    ulUstensil.classList.add("dropdown__list", "color");
    ulUstensil.setAttribute("aria-hidden", true);

    this.ustensils.forEach((ustensil, i) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("id", `option-ustensil-${i}`);
      li.textContent = ustensil;
      ulUstensil.appendChild(li);
    });
    return ulUstensil;
  }

  getAllMaterials() {
    const dropdownlists = [];

    dropdownlists.push(this.getIngredientList());
    dropdownlists.push(this.getAppareilList());
    dropdownlists.push(this.getUstensilList());
    return dropdownlists;
  }
}
