/**
 * Основи ООП: клас, об'єкт, інтерфейс
 */


/**
 * Функції-конструктори
 * Властивість prototype
 * Властивість Function.prototype
 */

function Student (name, age) {
    this.name = name;
    this.age = age;
}

console.dir(Student.prototype);
Student.prototype.getAge = function(){
    this.age +=1;
}



const Mango = new Student('Mango', 18)

console.log(Mango);

const Poly = new Student('Poly', 17)

console.log(Poly);


