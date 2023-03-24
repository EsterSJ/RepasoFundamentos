import { Point } from "./point";

export class Triangle{
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(v1:Point, v2:Point, v3:Point){
        this.vertex1 = v1;
        this.vertex2 = v2;
        this.vertex3 = v3;
    }

    public calculateLengthSides() : number[]{
        let arrayLados: number[] = [];
        arrayLados.push(this.vertex2.calculateDistance(this.vertex1));
        arrayLados.push(this.vertex1.calculateDistance(this.vertex3));
        arrayLados.push(this.vertex3.calculateDistance(this.vertex2));
        return arrayLados;
    }
}