import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */



/*
 * - Зупиняєм поведінку за замовчуванням
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */


/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */


/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */


// Додому
// зробити так щоб зберігало не тільки повідомлення, але і ім'я і все в одному об'єкті

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });