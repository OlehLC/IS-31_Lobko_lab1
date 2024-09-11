// Отримання елементів кнопок та текстового поля
const Lab1 = document.getElementById('lb1');
const Lab2 = document.getElementById('lb2');
const Lab3 = document.getElementById('lb3');
const Lab4 = document.getElementById('lb4');
const Lab5 = document.getElementById('lb5');
const Lab6 = document.getElementById('lb6');
const Lab7 = document.getElementById('lb7');
const Lab8 = document.getElementById('lb8');
const Lab9 = document.getElementById('lb9');
const text = document.getElementById('text');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const Labs=document.querySelectorAll(".btn");

// Змінна для поточної лабораторної роботи
let currentlab = 0;

// Функція для скидання кольору всіх кнопок
function resetButtonColors() {
    Labs.forEach(btn => {
        btn.style.borderColor = "black"; // Встановлюємо чорний колір рамки для всіх кнопок
        btn.style.backgroundColor = ""; // Скидаємо фон до стандартного
    });
}

// Функція для виділення вибраної кнопки
function highlightButton(button) {
    resetButtonColors(); // Спочатку скидаємо кольори для всіх кнопок
    button.style.borderColor = "white"; // Встановлюємо білий колір рамки для активної кнопки
    button.style.backgroundColor = "#b6e074"; // Встановлюємо зелений фон для активної кнопки
}



// Додаємо слухачі подій для кожної кнопки лабораторних робіт
Lab1.addEventListener("click", function() {
    currentlab = 1;
    highlightButton(Lab1); // Викликаємо функцію виділення кнопки
});

Lab2.addEventListener("click", function() {
    currentlab = 2;
    highlightButton(Lab2); // Викликаємо функцію виділення кнопки
});

Lab3.addEventListener("click", function() {
    currentlab = 3;
    highlightButton(Lab3); // Викликаємо функцію виділення кнопки
});

Lab4.addEventListener("click", function() {
    currentlab = 4;
    highlightButton(Lab4); // Викликаємо функцію виділення кнопки
});

Lab5.addEventListener("click", function() {
    currentlab = 5;
    highlightButton(Lab5); // Викликаємо функцію виділення кнопки
});

Lab6.addEventListener("click", function() {
    currentlab = 6;
    highlightButton(Lab6); // Викликаємо функцію виділення кнопки
});

Lab7.addEventListener("click", function() {
    currentlab = 7;
    highlightButton(Lab7); // Викликаємо функцію виділення кнопки
});

Lab8.addEventListener("click", function() {
    currentlab = 8;
    highlightButton(Lab8); // Викликаємо функцію виділення кнопки
});

Lab9.addEventListener("click", function() {
    currentlab = 9;
    highlightButton(Lab9); // Викликаємо функцію виділення кнопки
});

// Додаємо функціонал кнопки, яка виводить текст
btn1.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = "Клієнт може увійти один з 3 існуючих аккаунтів за логіном та паролем, після чого користувач переходить в оформлену головну сторінку. Де може перевірити баланс та історію транзакцій, отримати кредити , переслати гроші на інший аккаунт, закрити аккаунт. Також на сторінці передбачений таймер який фіксує не активність через що виходить з акаунту. ";
            break;
        case 2:
            text.textContent = "Лабораторна робота 2";
            break;
        case 3:
            text.textContent = "Лабораторна робота 3";
            break;
        case 4:
            text.textContent = "Лабораторна робота 4";
            break;
        case 5:
            text.textContent = "Лабораторна робота 5";
            break;
        case 6:
            text.textContent = "Лабораторна робота 6";
            break;
        case 7:
            text.textContent = "Лабораторна робота 7";
            break;
        case 8:
            text.textContent = "Лабораторна робота 8";
            break;
        case 9:
            text.textContent = "Лабораторна робота 9";
            break;
        default:
            text.textContent = "Будь ласка, виберіть лабораторну роботу.";
    }
});
btn2.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = "Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ. Мета: придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.";
            break;
        case 2:
            text.textContent = "Лабораторна робота 2";
            break;
        case 3:
            text.textContent = "Лабораторна робота 3";
            break;
        case 4:
            text.textContent = "Лабораторна робота 4";
            break;
        case 5:
            text.textContent = "Лабораторна робота 5";
            break;
        case 6:
            text.textContent = "Лабораторна робота 6";
            break;
        case 7:
            text.textContent = "Лабораторна робота 7";
            break;
        case 8:
            text.textContent = "Лабораторна робота 8";
            break;
        case 9:
            text.textContent = "Лабораторна робота 9";
            break;
        default:
            text.textContent = "Будь ласка, виберіть лабораторну роботу.";
    }
});