// Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

// let string = "ddd@bbb@ccc@@@dsfd@@";
// console.log(string.replace(/@/g, "!"));


// let word = "ddd@bbb@ccc@fgbh@@@";
// let newWord = word.replaceAll("@", "!");

// console.log(newWord);

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str2 = "js";
// console.log(str2.toUpperCase());

// Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str3 = "JS";
// console.log(str3.toLowerCase());

// Дана строка'I am a hero!'. Выведите в консоль количество символов в этой строке.

// let str4 = "I am a hero!";
// console.log(str4.length);

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
// **Пример: "Номер вашей карты: **********1245"**

let cardNumber = prompt("Номер вашей карты"); 
let last4 = cardNumber.slice(-4);
let astynkySifra = cardNumber.slice(0,-4);
let zamena = astynkySifra.replace(astynkySifra, "*").repeat(astynkySifra.length);
console.log(`Последние цифры вашей карты: ${zamena + last4}`);




