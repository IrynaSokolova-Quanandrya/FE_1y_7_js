/**
 * - Показуєм і приховуємо за допомогою класу is-visible
 * - Приховуємо через певний час
 * - Приховуємо під час кліку
 * - Очищаємо таймер
 */


const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);
let timeoutId = null;
showNotification();

/*
 * Функції
 */
function onNotificationClick() {
  hideNotification();
  console.log('Примусово закрили повідомлення');
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log("Закриваю повідомлення");
    hideNotification()

  }, 3000);

}

function hideNotification() {
  refs.notification.classList.remove('is-visible');

  
}


// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;