let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

let btn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("Task is empty, Please Enter your task");
    return;
  }

  let listItem = document.createElement("li");
  listItem.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  listItem.append(delBtn);
  ul.append(listItem);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
