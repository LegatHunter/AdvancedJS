// Задание 1 (тайминг 30 минут)
// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

// const button = document.querySelector(".btn");
// const div = document.querySelector(".div");

// function fetchNews() {
//   return new Promise((resolve, reject) => {
//     button.textContent = "Загрузка...";
//     button.disabled = true;
//     setTimeout(() => {
//       const news = ["news1", "news2", "news3"];
//       if (Math.random() > 0.1) {
//         resolve(news);
//       } else {
//         reject("error");
//       }
//     }, 1000);
//   });
// }

// button.addEventListener("click", () => {
//   fetchNews()
//     .then((data) => {
//       button.textContent = "Загрузка новостей";
//         button.disabled = false;
//       div.innerHTML = "";
//       data.forEach((item) => {
//         const p = document.createElement("p");
//         p.textContent = item;
//         div.append(p);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });



// Задание 2 (тайминг 25 минут)
// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

// const input = document.querySelector(".input");
// const save = document.querySelector(".save");
// const load = document.querySelector(".load");
// const clear = document.querySelector(".clear");
// const output = document.querySelector(".output");

// save.addEventListener("click", () => {
//   localStorage.setItem("text", input.value);
//   input.value = "";
// });
// load.addEventListener("click", () => {
//   output.innerHTML = localStorage.getItem("text");
//   input.value = "";
//   if (localStorage.getItem("text") === null) {
//     output.innerHTML = "Сохраненных данных нет";
//   }
//   if (localStorage.getItem("text") !== null) {
//     output.innerHTML = localStorage.getItem("text");
//   }
// });
// clear.addEventListener("click", () => {
//   localStorage.removeItem("text");
//   output.innerHTML = "";
// });



// Задание 3 (тайминг 35 минут)
// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.





// Задание 4* (тайминг 55 минут)
// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
// систему, используя данные, сохраненные в LocalStorage.
// Приложение будет состоять из трёх основных страниц:
// 1. Страница регистрации:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ После ввода данных, они сохраняются в LocalStorage.
// ○ Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// ○ Предлагает пользователю ввести логин и пароль.
// ○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
// на страницу приветствия.
// ○ Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// ○ Простое приветственное сообщение для авторизованного пользователя.
// ○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа


const login = document.querySelector(".reg_login");
const password = document.querySelector(".reg_password");
const button = document.querySelector(".reg_btn");
const login2 = document.querySelector(".enter_login");
const password2 = document.querySelector(".enter_password");
const button2 = document.querySelector(".enter_btn");
const logout = document.querySelector(".exit_btn");

button.addEventListener("click", () => {
  localStorage.setItem("login", login.value);
  localStorage.setItem("password", password.value);
  login.value = "";
  password.value = "";
  document.querySelector(".reg").classList.toggle("hidden");
  document.querySelector(".enter").classList.toggle("hidden");
});

button2.addEventListener("click", () => {
  if (localStorage.getItem("login") === login2.value && localStorage.getItem("password") === password2.value) {
    alert("Вы вошли в систему");
    document.querySelector(".enter").classList.toggle("hidden");
    document.querySelector(".welcome").classList.toggle("hidden");

  } else {
    alert("Неверные данные");
  }
  login2.value = "";
  password2.value = "";
});

logout.addEventListener("click", () => {
  localStorage.removeItem("login");
  localStorage.removeItem("password");
  document.querySelector(".welcome").classList.toggle("hidden");
  document.querySelector(".reg").classList.toggle("hidden"); // Исправлено: .req на .reg
});