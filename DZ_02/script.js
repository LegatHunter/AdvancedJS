// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.


// class Library {
//   #books = [];
//   constructor(books) {
//     if (new Set(books).size !== books.length) {
//       throw new Error("Найдены существующие книги");
//     }
//     this.#books = books;
//   }

//   get allBooks() {
//     return this.#books;
//   }

//   addBook(title) {
//     if (this.hasBook(title)) {
//       throw new Error("Книга уже существует");
//     }
//     this.#books.push(title);
//   }

//   removeBook(title) {
//     if (!this.hasBook(title)) {
//       throw new Error("Книги не существует");
//     }
//     this.#books = this.#books.filter((book) => book !== title);
//   }

//   hasBook(title) {
//     return this.#books.includes(title);
//   }
// }

// const library = new Library(["Book 1", "Book 2", "Book 3"]);
// console.log(library.hasBook("Book 5"));
// console.log(library.allBooks);
// library.addBook("Book 3");
// console.log(library.allBooks);
// library.removeBook("Book 10");
// console.log(library.allBooks);





// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
//   {
//     product: "Apple iPhone 13",
//     reviews: [
//       {
//         id: "1",
//         text: "Отличный телефон! Батарея держится долго.",
//       },
//       {
//         id: "2",
//         text: "Камера супер, фото выглядят просто потрясающе.",
//       },
//     ],
//   },
//   {
//     product: "Samsung Galaxy Z Fold 3",
//     reviews: [
//       {
//         id: "3",
//         text: "Интересный дизайн, но дорогой.",
//       },
//     ],
//   },
//   {
//     product: "Sony PlayStation 5",
//     reviews: [
//       {
//         id: "4",
//         text: "Люблю играть на PS5, графика на высоте.",
//       },
//     ],
//   },
// ];

// const input = document.querySelector(".comment");
// const btn = document.querySelector(".btn");
// const out = document.querySelector(".output");

// for (let i = 0; i < initialData.length; i++) {
// 	for (let j = 0; j < initialData[i].reviews.length; j++) {
// 		out.innerHTML += `<li><b>${initialData[i].product}</b>: ${initialData[i].reviews[j].text}</li>`;
// 	}
// }

// btn.addEventListener("click", () => {
// 	const text = input.value;
//   if (text.length < 50 || text.length > 500) {
//     throw new Error("Сообщение должно содержать от 50 до 500 символов");
//   } else {
//     out.innerHTML += `<li><b>Какой то товар: </b>${text}</li>`;
//   }
// });