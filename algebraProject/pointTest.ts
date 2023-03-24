import { Point } from "./point";

let myPoint: Point;
myPoint = new Point(2,3);

let x: number;
let y: number;

x = 5;
y = 8;

console.log(myPoint.getX());
console.log(myPoint.getY());

myPoint.setX(x);
myPoint.setY(y);

console.log(myPoint.toString());
