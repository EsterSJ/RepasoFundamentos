import { Point } from "./point";

let myPoint: Point;
myPoint = new Point(-2,3);

let anotherPoint: Point;
anotherPoint = new Point (12,21);
let p1: Point = new Point (1,21);
let p2: Point = new Point (2,2);
let p3: Point = new Point (4,-12);
let p4: Point = new Point (-1,2);
let p5: Point = new Point (-2,9);

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

console.log("El punto mas cercano es: "+  myPoint.calculateNearest([p4,p3,p5,p2,p1]));
