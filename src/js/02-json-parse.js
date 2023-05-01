const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ щось не зрозуміле від бекенду }';

try {
  console.log(1);

  console.log(JSON.parse(invalidJSON));

  console.log(2);
} catch (error) {
  console.log(error);
  if (error.name === 'SyntaxError') {
    console.log('Помилка парса json ');
  }
}

console.log('Пфсля try...catch');
