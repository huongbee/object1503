// const teo = {
//     name : 'Teo Nguyen',
//     age: 20,
//     goToSchool : function(){

//     }
// }
// const ti = {
//     name : 'Ti Nguyen',
//     age: 22
// }

// class Person{
//     constructor(ten, age){
//         this.name = ten 
//         this.age = age
//     }
//     goToSchool() {
//         // return "Hôm nay bạn "+this.name + " đi học";
//         return `Hôm nay bạn ${this.name} đi học`
//     }
// }

// const teo = new Person('Teo Nguyen',20)
// const ti = new Person('Ti Nguyen',22)
// console.log(teo.goToSchool)

function Person(name, age){
    this.name = name;
    this.age = age 
}

const teo = new Person('Teo', 22);
console.log(teo.name)
// console.log(typeof teo)