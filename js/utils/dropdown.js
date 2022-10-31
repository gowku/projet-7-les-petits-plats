import { tagConstructor } from "../constructor/tagConstructor.js";
import { delTag } from "./delTag.js";

// let tagList = [];

const tagWrapper = document.querySelector(".tags-container");

export function dropdown(tagList) {
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

  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const tagTemplate = new tagConstructor(e.target);
      // tagList.push(tagTemplate);
      // console.log(tagList);
      tagWrapper.appendChild(tagTemplate.getTags());
      delTag();
      closeList();
      //mettre la valeur des inputs a l'etat initial
      document.querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
      return tagList;
    });
  });
}
