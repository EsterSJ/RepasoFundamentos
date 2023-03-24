class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public setX(newX: number){
        this.x = newX;
    }

    public setY(newY: number){
        this.y = newY;
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }

    public toString(): string{
        return "(" + this.x + "," + this.y + ")";
    }

    public distanceToOrigin():number{
        return Math.sqrt(Math.pow(this.x - 0,2) + Math.pow(this.y - 0,2));
    }

    public calculateDistance(anotherPoint: Point):number{
        return Math.sqrt(Math.pow(this.x - anotherPoint.x,2) + Math.pow(this.y - anotherPoint.y,2));
    }

    public calcularQuadrant():number{
        if (this.x == 0 || this.y == 0){
            return 0;
        }else if (this.x > 0 && this.y > 0){
            return 1;
        }else if (this.x < 0 && this.y > 0){
            return 2;
        }else if (this.x < 0 && this.y < 0){
            return 3;
        }else{
            return 4;
        }
    }

    public calculateNearest(points: Point[]): Point{
        let distancia: number = this.calculateDistance(points[0]);
        let referencia: Point = points[0];
        for (let i = 1; i < points.length; i++){
            if (distancia > this.calculateDistance(points[i])){
                referencia = points[i];
            }
        }
        return referencia;
    }
}

export {Point}