const arr = [];
const arr1 = [];
// console.log(arr.concat());

// console.log({});

let value = 0;

const increment = function(number){
   return number +=1
}

const decrement = function(){
   return value -=1
}

const count = {
    value: 0,
    increment(){
        return this.value +=1
    },
     decrement(){
        return this.value -=1
     }
}

// const student = {
//     name: 'Giorge',
//     surname: 'Lee',
//     age: 19,
//     department: 'economy'
// }


class Student {
    constructor(name, surname, age, department){
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.department =department
    }

    incrementAge(){
        this.age += 1
    }
}


const student1 = new Student('Giorge', 'Lee', 19, 'economy');
student1.incrementAge()
console.log(student1);

const student2 = new Student('Ira', 'Sokolova', 20, 'development')
student2.incrementAge()
console.log(student2);