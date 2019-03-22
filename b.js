class Person{
    constructor(ten, age, school){
        this.name = ten 
        this.age = age
        this.school = school
    }
    goToSchool() {
        return `Hôm nay bạn ${this.name} đi học tai ${this.school.name}`
    }
}

class School{
    constructor(name, address){
        this.name = name
        this.address = address
    }
}
const school = new School('KPT','Cao Thang')

const Teo = new Person('Teo', 21, {name : 'Khoa Pham Training'})
console.log(Teo.goToSchool())