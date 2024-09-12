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
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const Labs=document.querySelectorAll(".btn");
const labs=document.querySelectorAll(".btn1");

// Змінна для поточної лабораторної роботи
let currentlab = 0;

// Функція для скидання кольору всіх кнопок
function resetButtonColors() {
    Labs.forEach(btn => {
        btn.style.borderColor = "black"; 
        btn.style.backgroundColor = ""; 
    });
}
function resetButtonColors2() {
    labs.forEach(btn => {
        btn.style.borderColor = "black"; 
        btn.style.backgroundColor = ""; 
    });
}


function highlightButton(button) {
    resetButtonColors(); 
    resetButtonColors2(); 
    button.style.borderColor = "white"; 
    button.style.backgroundColor = "#b6e074"; 
}
function highlightButton2(button) {
    resetButtonColors2(); 
    button.style.borderColor = "white"; 
    button.style.backgroundColor = "#b6e074"; 
 }



// Додаємо слухачі подій для кожної кнопки лабораторних робіт
Lab1.addEventListener("click", function() {
    currentlab = 1;
    highlightButton(Lab1); 
});

Lab2.addEventListener("click", function() {
    currentlab = 2;
    highlightButton(Lab2); 
});

Lab3.addEventListener("click", function() {
    currentlab = 3;
    highlightButton(Lab3); 
});

Lab4.addEventListener("click", function() {
    currentlab = 4;
    highlightButton(Lab4); 
});

Lab5.addEventListener("click", function() {
    currentlab = 5;
    highlightButton(Lab5); 
});

Lab6.addEventListener("click", function() {
    currentlab = 6;
    highlightButton(Lab6); 
});

Lab7.addEventListener("click", function() {
    currentlab = 7;
    highlightButton(Lab7); 
});

Lab8.addEventListener("click", function() {
    currentlab = 8;
    highlightButton(Lab8); 
});

Lab9.addEventListener("click", function() {
    currentlab = 9;
    highlightButton(Lab9); 
});
btn1.addEventListener("click", function() {
    highlightButton2(btn1); 
});
btn2.addEventListener("click", function() {
    highlightButton2(btn2); 
});
btn3.addEventListener("click", function() {
    highlightButton2(btn3); 
});
btn4.addEventListener("click", function() {
    highlightButton2(btn4); 
});
btn5.addEventListener("click", function() {
    highlightButton2(btn5); 
});
btn6.addEventListener("click", function() {
    highlightButton2(btn6); 
});

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
btn3.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = "Index.html/Style.css/script.js";
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
btn4.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = "<table> <tr>     <th>Country</th>     <th>Quantity of banks </th>      <th>Rating</th>   </tr>   <tr>     <td>Ukraine</td>     <td>100</td>      <td>4.6</td>   </tr>   <tr>     <td>USA</td>     <td>87</td>      <td>5.0</td>   </tr></table>";
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
btn5.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = `<form class="login">
            <input
              type="text"
              placeholder="user"
              class="login__input login__input--user"
            />
           
            <input
              type="text"
              placeholder="PIN"
              maxlength="4"
              class="login__input login__input--pin"
            />
            <button class="login__btn">&rarr;</button>
          </form>`;
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
btn6.addEventListener("click", function() {
    
    switch (currentlab) {
        case 1:
            text.textContent = `<a href="index.html"> <img src="profile.png" alt="Logo" class="logo" ></a>`;
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