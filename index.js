let button = document.getElementById("add-to-list");
let input = document.getElementById("to-do-input");
let todoListWrapper = document.getElementById("list-wrapper");

let handleActionClick = (event) => {
  const { classList } = event.target;
  let index = Array.from(todoListWrapper.children).indexOf(
    event.target.parentElement
  );
  let item = todoListWrapper.children[index];
  if (classList[0] === "delete") {
    todoListWrapper.removeChild(item);
  }
  if (classList[0] === "edit") {
    input.value = item.getElementsByTagName("span")[0].innerHTML;
    todoListWrapper.removeChild(item);
  }
};

button.addEventListener("click", (e) => {
  const { value } = input;
  let li = document.getElementById("hidden-item").cloneNode(true);
  let text = li.getElementsByTagName("span")[0];
  text.innerHTML = value;
  todoListWrapper.appendChild(li);
});

todoListWrapper.addEventListener("click", handleActionClick);
