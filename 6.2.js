class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (
            otherRectangle.topLeftXPos >= this.topLeftXPos &&
            otherRectangle.topLeftXPos <= this.topLeftXPos + this.length &&
            otherRectangle.topLeftYPos <= this.topLeftYPos &&
            otherRectangle.topLeftYPos >= this.topLeftYPos - this.width
        ) {
            return true;
        }
        return false;
    }
}

const rect1 = new Rectangle(0, 1, 1, 2),
    rect2 = new Rectangle(1, 1, 1, 2), //rect1 should collide with rect 2
    rect3 = new Rectangle(12, 60, 1, 2); //rect1 should not collide with rect2
console.log(rect1.collides(rect2), rect1.collides(rect3));
