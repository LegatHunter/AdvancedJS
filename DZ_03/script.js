const push = document.querySelector(".push");
const input = document.querySelector(".input");
const textarea = document.querySelector(".comment");
const button = document.querySelector(".btn");
const saveBtn = document.querySelector(".save_btn");
const nextStep = document.querySelectorAll(".nextStep");
const output = document.querySelector(".output");
const productList = document.querySelector(".productList");
let local = localStorage.getItem("comment");
const items = {};

button.addEventListener("click", () => {
  if (input.value === "" || textarea.value === "") {
    alert("Заполните все поля");
  } else {
    if (!(input.value in items)) {
      items[input.value] = [];
    }
    items[input.value].push(textarea.value);
    console.log(items);
    input.value = "";
    textarea.value = "";
  }
});

saveBtn.addEventListener("click", () => {
  if (Object.keys(items).length === 0) {
    alert("Сначала добавьте товар");
  } else {
    localStorage.setItem("comment", JSON.stringify(items));
  }
});

nextStep.forEach((button) => {
  button.addEventListener("click", () => {
    push.classList.toggle("hidden");
    output.classList.toggle("hidden");
    if (push.classList.contains("hidden")) {
      product(local);
    }
  });
});

function product(local) {
  const localParse = JSON.parse(local);
  productList.innerHTML = "";

  if (!localParse || Object.keys(localParse).length === 0) {
    const notProd = document.createElement("h3");
    notProd.textContent = "Список товаров пуст";
    productList.appendChild(notProd);
  } else {
    for (const key in localParse) {
      const prod = document.createElement("h3");
      prod.textContent = `*Товар: ${key}`;
      productList.appendChild(prod);
      prod.addEventListener("click", () => {
        if (localParse[key].length > 0) {
          if (prod.querySelectorAll('.comment1').length === 0) {
            localParse[key].forEach((com) => {
              const text = document.createElement("p");
              text.classList.add("comment1");
              text.textContent = `Комментарий: ${com}`;
              prod.appendChild(text);
            });
          } else {
            prod.querySelectorAll('.comment1').forEach(comment => comment.remove());
          }
        }
      });
    }
  }
}
