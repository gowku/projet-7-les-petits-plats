export class RecipeConstructor {
  constructor(recipe) {
    this.recipe = recipe;
    this.appliance = recipe.appliance;
    this.description = recipe.description;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.name = recipe.name;
    this.servings = recipe.servings;
    this.time = recipe.time;
    this.ustensils = recipe.ustensils;
    // this.$ingredientWrapper = document.createElement("ul");
  }

  getRecipe() {
    const recipe = document.createElement("div");
    recipe.classList.add("card");
    const img = document.createElement("div");
    img.classList.add("card-image");
    const description = document.createElement("div");
    description.classList.add("card-description");
    const descriptionTop = document.createElement("div");
    descriptionTop.classList.add("card-description-top");
    const descriptionTopTitle = document.createElement("div");
    descriptionTopTitle.classList.add("card-description-top-title");
    const pName = document.createElement("p");
    pName.textContent = this.name;
    const descriptionTopTime = document.createElement("div");
    descriptionTopTime.classList.add("card-description-top-time");
    const svg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z"
        fill="black"
      />
    </svg>`;
    const pTime = document.createElement("p");
    pTime.textContent = this.time + ` mn`;
    const descriptionBottom = document.createElement("div");
    descriptionBottom.classList.add("card-description-bottom");
    const descriptionBottomIngedients = document.createElement("div");
    descriptionBottomIngedients.classList.add("card-description-bottom-ingredients");
    // const ul =
    const descriptionBottomRecette = document.createElement("div");
    descriptionBottomRecette.classList.add("card-description-bottom-recette");
    const pDescription = document.createElement("p");
    pDescription.textContent = this.description;

    descriptionBottomRecette.appendChild(pDescription);
    const ul = this.getIngredient();
    descriptionBottomIngedients.appendChild(ul);
    descriptionBottom.appendChild(descriptionBottomIngedients);
    descriptionBottom.appendChild(descriptionBottomRecette);

    descriptionTopTime.innerHTML = svg;
    descriptionTopTime.appendChild(pTime);
    descriptionTopTitle.appendChild(pName);
    descriptionTop.appendChild(descriptionTopTitle);
    descriptionTop.appendChild(descriptionTopTime);

    description.appendChild(descriptionTop);
    description.appendChild(descriptionBottom);

    recipe.appendChild(img);
    recipe.appendChild(description);
    return recipe;
  }

  getIngredient() {
    const ul = document.createElement("ul");
    ul.classList.add("ingredientContainer");
    // let ingredients = [];

    this.recipe.ingredients.forEach((element) => {
      const ingredient = document.createElement("li");

      if (element.unit != undefined) {
        ingredient.textContent = element.ingredient + " : ";
        const span = document.createElement("span");
        span.textContent = element.quantity + " " + element.unit;
        ingredient.appendChild(span);
        ul.appendChild(ingredient);
        // console.log(ingredient);
      } else if (element.quantity != undefined) {
        ingredient.textContent = element.ingredient + " : ";
        const span = document.createElement("span");
        span.textContent = element.quantity;
        ingredient.appendChild(span);
        ul.appendChild(ingredient);
      } else {
        ingredient.textContent = element.ingredient;
        ul.appendChild(ingredient);
      }
      //   console.log(ul);
      //   ul.innerHTML += ingredient;
      //   return ul;
    });
    return ul;
    // console.log(ul);
  }
}
