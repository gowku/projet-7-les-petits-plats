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

// dropdownSelectedNode.addEventListener("click", (e) => {
//   // toRemove.remove();
//   // dropdownSelectedNode.innerHTML = input;
//   //   const input = document.createElement("input");
//   //   dropdownSelectedNode.appendChild(input);
//   list.classList.toggle("open");
//   dropdown.classList.toggle("radius");
//   dropdown.classList.toggle("open_input");
//   dropdownArrow.classList.toggle("expanded");
//   listContainer.setAttribute("aria-expanded", list.classList.contains("open"));
// });

listItems.forEach((item) => listItemIds.push(item.id));

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    dropdown.classList.toggle("radius");
    // setSelectedListItem(e);
    closeList();
  });
});

// function setSelectedListItem(e) {
//   let selectedTextToAppend = document.createTextNode(e.target.innerText);
//   dropdownSelectedNode.innerHTML = null;
//   dropdownSelectedNode.appendChild(selectedTextToAppend);
//   // console.log(selectedTextToAppend);
// }

function closeList() {
  list.classList.remove("open");
  // toRemove.remove();
  // dropdownSelectedNode.innerHTML = p;
  dropdownArrow.classList.remove("expanded");
  listContainer.setAttribute("aria-expanded", false);
}
