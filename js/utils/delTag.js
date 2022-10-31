export function delTag() {
  const delBtn = document.querySelectorAll(".tag");
  // console.log(delBtn);
  delBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".tag").remove();
    });
  });
}
