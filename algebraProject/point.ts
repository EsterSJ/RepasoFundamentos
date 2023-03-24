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
}

export {Point}