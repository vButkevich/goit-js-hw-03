/*
Задача 2. Композиція масивів
ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-2.js
Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
В іншому випадку функція повинна повернути весь новий масив.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція makeArray(firstArray, secondArray, maxLength)
Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив
*/
'use strict';
{
    let task = '2';
    console.log(`----------------task-${task}--------------------`);
    {
        function makeArray(firstArray, secondArray, maxLength) {
            let array = firstArray.concat(secondArray);
            return array.slice(0, maxLength);
        };

        console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
        console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
        console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
        console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
        console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
        console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
    }
    console.log(`----------------task-${task}--------------------`);
}

