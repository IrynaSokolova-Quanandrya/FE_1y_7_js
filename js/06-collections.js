/*
 * Створюємо і додаємо колекцію
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
  
  const colorPickerContainerEl = document.querySelector('.js-color-picker');
  
  // const option = colorPickerOptions[0];
  // console.log(option);

  // const buttonEl = document.createElement('button');
  // buttonEl.type = 'button';
  // buttonEl.textContent = option.label;
  // buttonEl.style.backgroundColor = option.color;

  


  // const buttons =  colorPickerOptions.map(function (option) {
  //   const buttonEl = document.createElement('button');
  //     buttonEl.type = 'button';
  //     buttonEl.classList = 'color-picker__option'
  //     buttonEl.textContent = option.label;
  //     buttonEl.style.backgroundColor = option.color;

  // // console.log(buttonEl);
  // return buttonEl
  // })

  // console.log(buttons);

  // colorPickerContainerEl.append(...buttons)

  /*
   * Пишемо функцію для створення розмітки колорпікеру
   */

  const createBtnEl = function (options) {
   return options.map(function (option) {
      const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList = 'color-picker__option'
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;
    return buttonEl
    })    
    
  }

  const btns = createBtnEl(colorPickerOptions);


  colorPickerContainerEl.append(...btns)
