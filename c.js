class Point{
    constructor(x,y){
        this.x = x 
        this.y = y
    }
    getDistance(){
        return Math.sqrt(this.x*this.x + Math.pow(this.y,2))
    }
}
class Line{
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB
    }
    
    getLength(){
        const x = this.pointA.x - this.pointB.x 
        const y = this.pointA.y - this.pointB.y
        return Math.sqrt(x*x + Math.pow(y,2))
    }
}
// tính độ dài đoạn thẳng OA
// const A = new Point(1,3)
// console.log(A.getDistance())

//tạo B(x,y)
// Tính độ dài đoạn thẳng AB
// const A = new Point(1,1)
// const B = new Point(2,2)
// const AB = new Line(A,B)
// console.log(AB.getLength())

class Triangle {
    constructor(pointA, pointB, pointC){
        this.pointA = pointA
        this.pointB = pointB
        this.pointC = pointC
    }
    getPerimeter(){
        const AB = new Line(this.pointA, this.pointB)
        const BC = new Line(this.pointB, this.pointC)
        const AC = new Line(this.pointA, this.pointC)
        return AB.getLength() + BC.getLength() + AC.getLength()
    }
}
const A = new Point(0,0)
const B = new Point(0,1)
const C = new Point(1,0)
const ABC = new Triangle(A,B,C)
console.log(ABC.getPerimeter())