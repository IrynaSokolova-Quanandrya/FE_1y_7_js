// Обробка помилок з try...catch
//  - Синтаксис
//  - які помилки відловлює
//    - ❌ помилки парсинга (parsing errors)
//    - ✅ помилки виконання (runtime errors)
//  - Відловнює тільки помилки в синхроному коді
//    - Як зловили помилку в асинхроному коді
//  - Об'єкт помилки
//    - name
//    - message
//    - stack
//  - Блок catch без об'екту помилки

try {
    console.log('Код до myName');
    
    setTimeout(()=>{
        try{
            myName;
        } catch{
            console.log('error');
        }
        
    }, 500);
    

    console.log('Код після myName');

} catch {
    console.log('Помилка');
}

console.log('Код за try...catch');











// import { error, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';
// import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});


// error({
//   text: 'Моя перша нотифікація!',
// });