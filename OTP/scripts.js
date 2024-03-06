const inputElements = [...document.getElementsByTagName("input")];

function handleChange(e) {
  //   e.preventDefault()
  let value = e.target.value || undefined;
  console.log("asdasdas", value, Number.isNaN(value), e);
  if (e.keyCode === 8 && (Number.isNaN(value) || !value)) {
    let id = e.target.getAttribute("data-id");
    document.querySelector(`[data-id="${parseInt(id) - 1}"]`).focus();
  }
  if (!Number.isNaN(value) && e.keyCode !== 8) {
    let id = e.target.getAttribute("data-id");
    e.target.value = value;
    document.querySelector(`[data-id="${parseInt(id) + 1}"]`).focus();
  }
}

inputElements.forEach((el) => el.addEventListener("keyup", handleChange));
