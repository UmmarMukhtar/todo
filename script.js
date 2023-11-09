const taskInput = document.getElementById("todo");
const addTodoBtn = document.querySelector(".button");
const todoListContainer = document.querySelector(".todoListContainer");
const ul = document.querySelector(".ul");

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (taskInput.value == "") {
    return;
  } else {
    //
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    //
    const li = document.createElement("li");
    li.innerHTML = taskInput.value;
    //

    //
    const dltBtn = document.createElement("button");
    dltBtn.className = "dltButton";
    dltBtn.innerHTML = "Delete";

    //

    const s1 = document.createElement("span");
    s1.className = "s1";
    s1.appendChild(checkBox);
    s1.appendChild(li);
    s1.appendChild(dltBtn);

    const s2 = document.createElement("span");
    s2.className = "s2";

    todoListContainer.appendChild(ul);
    ul.appendChild(s1);
    ul.appendChild(s2);

    checkBox.onclick = () => {
      if (checkBox.checked == true) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };

    dltBtn.onclick = (e) => {
      e.preventDefault();
      s1.remove();
      dltBtn.remove();
      li.remove();
    };

    taskInput.value = "";
  }
});
