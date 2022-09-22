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
    const $recipeWrapper = document.createElement("div");
    $recipeWrapper.classList.add("card");
    // this.getIngredient();

    const recipe = `
    <div class="card-image"></div>
    <div class="card-description">
      <div class="card-description-top">
        <div class="card-description-top-title"><p>${this.name}</p></div>
        <div class="card-description-top-time">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z"
              fill="black"
            />
          </svg>
          <p>${this.time} mn</p>
        </div>
      </div>
      <div class="card-description-bottom">
        <div class="card-description-bottom-ingredients">
          <ul class="ingredientContainer"></ul>
        </div>
        <div class="card-description-bottom-recette">
          <p>${this.description}</p>
        </div>
      </div>
    </div>
              `;
    $recipeWrapper.innerHTML = recipe;
    return $recipeWrapper;
  }

  getIngredient() {
    const $ingredientWrapper = document.createElement("ul");

    for (const ingredient in this.ingredients) {
      //   console.log(ingredient);
      const element = this.ingredients[ingredient];
      // console.log(element);
      let ingredientLi;
      if (element.unit != undefined) {
        return (ingredientLi = `
            <li>${element.ingredient}:
            <span>${element.quantity} ${element.unit}</span></li>`);
      } else {
        return (ingredientLi = `
            <li>${element.ingredient}:
            <span>${element.quantity}</span></li>`);
      }
    }
    $ingredientWrapper.appendChild(ingredientLi);
    console.log($ingredientWrapper);
    return $ingredientWrapper;
    // const $ingredientWrapper = document.querySelector(".ingredientContainer");
    // $ingredientWrapper.classList.add("ingredientContainer");
    // let ingredient;
    // $ingredientWrapper.innerHTML = ingredient;
    // return $ingredientWrapper;
  }
}
