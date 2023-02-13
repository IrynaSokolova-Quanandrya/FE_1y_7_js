// import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const user = {
    name: 'Poly',
    age: 15,
}


localStorage.setItem('message', JSON.stringify(user))

const message = localStorage.getItem('message')
console.log(JSON.parse(message)); 

// localStorage.removeItem('message')
// localStorage.clear()


/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */
const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

formRef.addEventListener('submit', handleFormsubmit);
textareaRef.addEventListener('input', handleTextareaInput);

getValueFromLocalStorage();
/*
 * - Зупиняєм поведінку за замовчуванням
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
function handleFormsubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem('comment');
}


/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */
function handleTextareaInput(event) {
    const value = event.currentTarget.value;
    localStorage.setItem('comment', value);
}
/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function getValueFromLocalStorage() {
    const value = localStorage.getItem('comment');
    
    if (value) {
        textareaRef.textContent = value;
    }
    
}

// Додому
// зробити так щоб зберігало не тільки повідомлення, але і ім'я і все в одному об'єкті

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });