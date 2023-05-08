import foodTpl from '../templates/food.hbs';
import foodData from './food.json';
import '../css/food.css';

// console.log(foodTpl);
const foodRef = document.querySelector(".js-gallery")

const markup = foodTpl(foodData)

// foodRef.insertAdjacentHTML('beforeend', markup)

const switcher = document.querySelector(".theme-switch__toggle")

switcher.addEventListener('change', switcherCheced )

// const value = null
// localStorage.setItem('comment',value)

// 1. Отримуємо дані з localstorage
const theme = localStorage.getItem('currentTheme'); 

// колбек функція яка тоблить класи і зберігає поточний клас в локальному сховищі
function switcherCheced () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // const theme = localStorage.getItem('theme');
const value = document.body.classList; // це псевдомасив, тому потрібно обрати [0] індекс, 
// але в тебе там якийсь клас на боді ще є fs, тому [1] індекс
console.log(value);
localStorage.setItem('currentTheme',value[1])
}

//  якщо теми в localstorage жодної немає то зберігаємо там світлу тему
// і додаємо на body необхідний клас, в іншому випадку додаємо те що в 
// localstorage
    if(theme === null){
        localStorage.setItem('currentTheme', 'light-theme');
        document.body.classList.add('light-theme')
       
    } else
{
    document.body.classList.add(theme);
};

// якщо тема в localstorage темна то в атрибут checked записуємо true 
if (theme === 'dark-theme') {
    switcher.checked = true;
};
   
<div class="user">
  <h2>{{name}}</h2>
  <p>{{email}}</p>
</div>



