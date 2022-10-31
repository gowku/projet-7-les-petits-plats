export class tagConstructor {
  constructor(tag) {
    // this.tag = tag;
    this.name = tag.textContent;
    this.whitch = tag.attributes[1].value;
  }

  getTags() {
    const witchOne = this.whitch.split("-")[1];

    const li = document.createElement("li");
    li.classList.add("tag");

    switch (witchOne) {
      case "ingredient":
        li.classList.add("ingredient");
        break;
      case "appareil":
        li.classList.add("appareil");
        break;
      case "ustensil":
        li.classList.add("ustensil");
        break;

      default:
        break;
    }

    const svg = ` <svg class="delBtn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="white"
        />
      </svg>`;
    const p = document.createElement("p");
    p.innerText = this.name;
    li.innerHTML = svg;
    li.insertAdjacentElement("afterbegin", p);

    return li;
  }
}
