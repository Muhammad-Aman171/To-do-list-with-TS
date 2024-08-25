const inputBox: NodeListOf<HTMLInputElement> =
  document.querySelectorAll(".input-box");
const listContainer: NodeListOf<Element> =
  document.querySelectorAll(".list-container");
const addBtn: NodeListOf<Element> = document.querySelectorAll(".add");

addBtn.forEach((addBtn: Element) => {
  addBtn.addEventListener("click", () => {
    addTask();
  });
});

const addTask = () => {
  inputBox.forEach((inputBox: HTMLInputElement) => {
    if (inputBox.value === "") {
      alert("you must write something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.forEach((listContainer: Element) => {
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      });
    }
    inputBox.value = "";

  });
};

listContainer.forEach((listContainer: Element) => {
  listContainer.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
      target.parentElement?.remove();
    }
  });
});
false;


