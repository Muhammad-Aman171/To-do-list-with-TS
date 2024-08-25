"use strict";
const inputBox = document.querySelectorAll(".input-box");
const listContainer = document.querySelectorAll(".list-container");
const addBtn = document.querySelectorAll(".add");
addBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
        addTask();
    });
});
const addTask = () => {
    inputBox.forEach((inputBox) => {
        if (inputBox.value === "") {
            alert("you must write something");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.forEach((listContainer) => {
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            });
        }
        inputBox.value = "";
    });
};
listContainer.forEach((listContainer) => {
    listContainer.addEventListener("click", (e) => {
        var _a;
        const target = e.target;
        if (target.tagName === "LI") {
            target.classList.toggle("checked");
        }
        else if (target.tagName === "SPAN") {
            (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    });
});
false;
