const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ щось не зрозуміле від бекенду }';

console.log('До');


console.log(JSON.parse(invalidJSON));

console.log('Після');
