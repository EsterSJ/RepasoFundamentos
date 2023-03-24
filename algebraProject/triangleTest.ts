import { Triangle } from "./triangle";
import { Point } from "./point";

let p1: Point = new Point (1,1);
let p2: Point = new Point (5,5);
let p3: Point = new Point (7,1);

let myTriangle: Triangle;
myTriangle = new Triangle(p1,p2,p3);

console.log(myTriangle.calculateLengthSides());

