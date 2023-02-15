import '../css/common.css';

/**
 * - Показуєм і приховуємо за допомогою класу is-visible
 * - Приховуємо через певний час
 * - Приховуємо під час кліку
 * - Очищаємо таймер
 */

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();

}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Закриваємо алерт автоматично');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
