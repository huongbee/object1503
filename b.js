class Person{
    constructor(ten, age, school){
        this.name = ten 
        this.age = age
    }
    goToSchool() {
        return `Hôm nay bạn ${this.name} đi học`
    }
}

class School{
    constructor(name, address){
        this.name = name
        this.address = address
    }
}
const school = new School('KPT','Cao Thang')