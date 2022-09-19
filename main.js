const dropdown = document.querySelector(".dropdown");
const list = document.querySelector(".dropdown__list");
const listContainer = document.querySelector(".dropdown__list-container");
const dropdownArrow = document.querySelector(".dropdown__arrow");
const listItems = document.querySelectorAll(".dropdown__list-item");
const toRemove = document.querySelector("#dropdown__selected");
const dropdownSelectedNode = document.querySelector(".selected_item");
const listItemIds = [];

const p = `<p id="dropdown__selected">Ingrédients</p>`;
const input = `<input id="input_selected" placeholder="Rechercher un ingrédient"></input>`;

dropdownSelectedNode.addEventListener("click", (e) => {
  toRemove.remove();
  dropdownSelectedNode.innerHTML = input;
  //   const input = document.createElement("input");
  //   dropdownSelectedNode.appendChild(input);
  list.classList.toggle("open");

  dropdown.classList.toggle("radius");
  dropdown.classList.toggle("open_input");
  dropdownArrow.classList.toggle("expanded");
  listContainer.setAttribute("aria-expanded", list.classList.contains("open"));
});

listItems.forEach((item) => listItemIds.push(item.id));

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    dropdown.classList.toggle("radius");
    // setSelectedListItem(e);
    closeList();
  });
});

function setSelectedListItem(e) {
  let selectedTextToAppend = document.createTextNode(e.target.innerText);
  dropdownSelectedNode.innerHTML = null;
  dropdownSelectedNode.appendChild(selectedTextToAppend);
  // console.log(selectedTextToAppend);
}

function closeList() {
  list.classList.remove("open");
  toRemove.remove();
  dropdownSelectedNode.innerHTML = p;
  dropdownArrow.classList.remove("expanded");
  listContainer.setAttribute("aria-expanded", false);
}
