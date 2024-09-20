// Задание 1 (тайминг 20 минут)
// Создать механизм для безопасного добавления метаданных к
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы,
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных)
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на
// консоль.

const book = {
  title: "Война и мир",
  author: "Л.Н. Толстой",
  year: 1865,
  [Symbol("rating")]: 4.5,
  [Symbol("tags")]: ["novel", "classics", "war"],
  [Symbol("reviews")]: [
    { author: "Толстой", text: "Хороший" },
    { author: "Лермонтов", text: "Плохой" },
  ],

  addMetadata(key, value) {
    this[key] = value;
  },
  getMetadata(key) {
    return this[key];
  },

  printMetadata() {
    for (const key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  },
};

book.addMetadata("rating", 5);
book.addMetadata("tags", ["novel", "classics", "war", "fiction"]);
book.addMetadata("reviews", [
  { author: "Толстой", text: "Хороший" },
  { author: "Лермонтов", text: "Плохой" },
]);
book.printMetadata();



// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.
// Массив книг: 

const books = [
  {title: '1984', author: 'George Orwell'},
  {title: 'Brave New World', author: 'Aldous Huxley'},
  {title: 'Fahrenheit 451', author: 'Ray Bradbury'}
];
