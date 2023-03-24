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
}

export {Point}