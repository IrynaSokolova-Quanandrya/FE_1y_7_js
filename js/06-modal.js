/*
 * 1. Відкрити і закрити по кнопці
 * 2. Закрити по кліку в бекдроп: onBackDropClick
 * 3. Закрити по ESC: onEscapeKeypress
 *
 * В CSS вже э клас show-modal, який необхідно додати на body при выдкритті модалки
 */

/*
* АЛГЛРИТМ ДІЇ
* 1. Вішаємо слухача на кнопки відкрити та закрити
* 2. Сворюємо колбекі, додаємо і знімаємо клас 
* 3. Реалізуємо закриття модалки по бекдропу:
* 3.1 робимо перевірку target === currentTarget
* 4. Реалізовуємо закриття по esc:
* 4.1 вішаємо слухача на window
* 4.2 знымаэмо слухача з window
* 4.3 робимо перевірку на натиснення по потрібній клавіші ESC
*/

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };
  
  refs.openModalBtn.addEventListener('click', );
  refs.closeModalBtn.addEventListener('click', );
  refs.backdrop.addEventListener('click', );
  
  function onOpenModal() {}
  
  function onCloseModal() {}
  
  function onBackdropClick(event) {
      console.log('Клікнули саме в бекдроп!!!!');
  }
  
  function onEscKeyPress(event) {}