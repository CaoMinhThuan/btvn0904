class Point2D {
    x:number;
    y:number;
    constructor(x:number,y:number) {
        this.x = x
        this.y = y
    }
    getX():number{
        return this.x
    }
    getY():number{
        return this.y
    }
    getXY():object{
        return {x:this.x,y:this.y}
    }

    setXy(x:number,y:number){
        this.x = x
        this.y = y
    }

}
class Point3D extends Point2D{
    x:number;
    y:number;
    z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    getX(): number {
        return super.getX();
    }
    getY(): number {
        return super.getY();
    }
    getZ() :number{
        return this.z
    }
    setZ(z:number){
        this.z = z
    }
    getXyz():object{
        return {x:this.x,y:this.y,z:this.z}
    }
    setXyz(x:number,y:number,z:number){
        this.x = x
        this.y = y
        this.z = z

    }

}
let c = new Point3D(10,30,20)
console.log(c.getXyz())