// Задание 1 (тайминг 20 минут)
// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

// const book = {
//   title: "Война и мир",
//   author: "Л.Н. Толстой",
// };

// function addMetadata(obj, key, value) {
//   if (obj[key]) {
//     obj[key].push(value);
//   } else {
//     obj[key] = [value];
//   }
// }

// function getMetadata(obj, key) {
//   return obj[key]
// }

// const rating = Symbol("rating");
// const tags = Symbol("tags");
// const reviews = Symbol("reviews");

// addMetadata(book, reviews, 'Круто')
// addMetadata(book, rating, 5)
// addMetadata(book, tags, ['толстой', 'литература'])

// console.log(getMetadata(book, reviews))
// console.log(getMetadata(book, rating))
// console.log(getMetadata(book, tags))

// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.
// Массив книг:

// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const library = {
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next() {
//         if (i < books.length) {
//           return { value: books[i++], done: false };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// }

// for (const book of library) {
//   console.log(book);
// }

// Задание 3 (тайминг 15 минут)
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
// массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
// Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
// с ними.
// Дан код html:

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
// фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

const divs = Array.from(document.querySelectorAll("div"));

const filterDivs = divs.filter(element => element.hasAttribute("data-active"));

filterDivs.forEach(element => {
  console.log(element);
});


// Задание 4 (тайминг 20 минут)
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и
// преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые
// посетил каждый студент.
const lessons = new Map()
lessons.set("Математика", "Смирнов")
lessons.set("История", "Иванова")

const ivanLessons = new Set()
ivanLessons.add("Математика")
ivanLessons.add("История")

const students = new Map()
students.set("Иван", ivanLessons)

console.log(`Преподаватель по математике: ${lessons.get("Математика")}`);
console.log(`Уроки, которые посетил студент Иван: ${[...students.get("Иван")]}`);