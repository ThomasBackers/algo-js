class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {
        return Math.PI*Math.pow(this.radius, 2);
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}
const randomCircle = new Circle(0, 0, 2);
console.log("xPos:", randomCircle.xPos, "yPos:", randomCircle.yPos);
randomCircle.move(5, 3);
console.log("xPos (after move):", randomCircle.xPos, "yPos (after move):", randomCircle.yPos);
console.log("radius:", randomCircle.radius, "surface:", randomCircle.surface);
