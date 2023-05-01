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
  console.log('Всередині try до myVar');

  myVar;

  console.log('Всередині try після myVar');
} catch (error) {
  console.log('Помилка!');
}

console.log('Після try...catch');
