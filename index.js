const addProduct = () => {
  const input = document.querySelector("input");
  const list = document.querySelector("ul");
  const listItem = input.value;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const textNode = document.createTextNode(listItem);
  li.appendChild(checkbox);
  li.appendChild(textNode);
  list.appendChild(li);
};
