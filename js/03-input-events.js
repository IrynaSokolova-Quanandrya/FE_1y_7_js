/*
 * Паттерн «Об'ект посилань»
 *
 * Події
 * - focus і blur
 * - input і change
 * - отримуємо значення інпута та замінюємо текст в спані
 * - Чекбокси та властивість checked
 * - робимо активну кнопку
 */


    const input = document.querySelector('.js-input');
    const nameLabel = document.querySelector('.js-button > span');
    const licenseCheckbox = document.querySelector('.js-license');
    const btn = document.querySelector('.js-button');
  
  
    // input.addEventListener('focus', onInputFocus)
    // input.addEventListener('blur', onInputFocus)
    // input.addEventListener('change', onInputFocus)
    input.addEventListener('input', onInputChange)
    licenseCheckbox.addEventListener('change', onLicenseChange)

    // function onInputFocus() {
    //   console.log('Інпут отримав фокус - події focus');
    // }
    
    // function onInputBlur() {
    //   console.log('Інпут втратив фокус - події blur');
    // }
    
    // handleSubjectEvent
// subjectEventHandler
    function inputChangeHandler(event) {
      console.dir(event.currentTarget.value);
      nameLabel.textContent = event.currentTarget.value;
    }
    
    function onLicenseChange(event) {
      // console.dir(event.currentTarget.checked);
      // console.log(btn.disabled);
      btn.disabled = !event.currentTarget.checked
    }