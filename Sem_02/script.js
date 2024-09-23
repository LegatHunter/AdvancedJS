// Задание 1 (тайминг 25 минут)
// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
// Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.

class BankAccount {
  #balance = 0;
  constructor(balance) {
    if (balance > 0) {
      this.#balance = balance;
    }
    else {
      return "error";
    }
  }
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      return "error";
    }
  }
  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
    } else {
      return "error";
    }
  }
}

let account = new BankAccount(500);
console.log(account.balance);

account.deposit(100);
console.log(account.balance);

account.withdraw(50);
console.log(account.balance);



// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class PremiumUser extends User {
  constructor(name, surname, premiumAccount) {
    super(name, surname); // вызываем конструктор родительского класса
    this.premiumAccount = premiumAccount;
  }
}

class RegularUser extends User {
  constructor(name, surname) {
    super(name, surname); // вызываем конструктор родительского класса
  }
}

function getAccountInfo(user) {
  if (user instanceof PremiumUser) {
    return `Премиум аккаунт действует до ${user.premiumAccount}`;
  } else if (user instanceof RegularUser) {
    return "Премиум аккаунт отсутствует";
  } else {
    return "Неизвестный тип пользователя";
  }
}

let user1 = new PremiumUser("Иван", "Петров", "2025-12-31");
let user2 = new RegularUser("Алексей", "Сидоров");

console.log(getAccountInfo(user1));
console.log(getAccountInfo(user2));

// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  try {
    const value = Number(input.value);
    if (Number.isInteger(value)) {
      output.innerHTML = "Введено целое число";
    } else {
      output.innerHTML = "Введено не целое число";
    }
  } catch (error) {
    output.innerHTML = "Введено не целое число";
  }
});

// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
// введенное значение должно содержать от 3 до 10 символов.
// 1. Создайте HTML-структуру с текстовым полем, кнопкой и списком.
// 2. Напишите функцию, которая будет добавлять элементы в список или
// генерировать исключение, если длина введенного значения не соответствует
// требованиям.

const list = document.querySelector(".list");
btn.addEventListener("click", addElement);
function addElement() {
  const value = document.querySelector(".input").value;
  if (value.length < 3 || value.length > 10) {
    throw new Error("Введено некорректное значение");
  }
  const li = document.createElement("li");
  li.innerHTML = value;
  list.append(li);

  document.querySelector(".input").value = "";

  // try {
  //   if (value.length < 3 || value.length > 10) {
  //     throw new Error("Введено некорректное значение");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
}
