import { Point } from "./point";

let myPoint: Point;
myPoint = new Point(-2,3);

let anotherPoint: Point;
anotherPoint = new Point (12,21);

let x: number;
let y: number;

x = -5;
y = 0;

console.log(myPoint.getX());
console.log(myPoint.getY());

myPoint.setX(x);
myPoint.setY(y);

console.log(myPoint.toString());

console.log("Distancia al origen: " + myPoint.distanceToOrigin());
console.log("Distancia entre dos puntos: " + anotherPoint.distanceToOrigin());

console.log(myPoint.calcularQuadrant());

