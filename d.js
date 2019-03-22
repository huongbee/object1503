class Point{
    constructor(x,y){
        this.x = x 
        this.y = y
    }
    get distance(){
        return Math.sqrt(this.x*this.x + Math.pow(this.y,2))
    }
    set toaDoX(_toadox){
        this.x = _toadox
    }
}
// const A = new Point(1,1)
// // console.log(A.distance()) //false
// // console.log(A.distance) 
// A.toaDoX = 3
// // A.x = 2
// console.log(A)