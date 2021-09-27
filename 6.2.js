class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if ( //seems impressive but only check if a corner of the other rectangle is inside or against the current rectangle
            (otherRectangle.topLeftXPos >= this.topLeftXPos &&
                otherRectangle.topLeftXPos <= this.topLeftXPos + this.length &&
                otherRectangle.topLeftYPos <= this.topLeftYPos &&
                otherRectangle.topLeftYPos >= this.topLeftYPos - this.width) ||
            (otherRectangle.topLeftXPos + otherRectangle.length >= this.topLeftXPos &&
                otherRectangle.topLeftXPos + otherRectangle.length <=
                    this.topLeftXPos + this.length &&
                otherRectangle.topLeftYPos <= this.topLeftYPos &&
                otherRectangle.topLeftYPos >= this.topLeftYPos - this.width) ||
            (otherRectangle.topLeftXPos + otherRectangle.length >= this.topLeftXPos &&
                otherRectangle.topLeftXPos + otherRectangle.length <=
                    this.topLeftXPos + this.length &&
                otherRectangle.topLeftYPos - otherRectangle.width <= this.topLeftYPos &&
                otherRectangle.topLeftYPos - otherRectangle.width >=
                    this.topLeftYPos - this.width) ||
            (otherRectangle.topLeftXPos >= this.topLeftXPos &&
                otherRectangle.topLeftXPos <= this.topLeftXPos + this.length &&
                otherRectangle.topLeftYPos - otherRectangle.width <= this.topLeftYPos &&
                otherRectangle.topLeftYPos - otherRectangle.width >= this.topLeftYPos - this.width)
        ) {
            return true;
        }
        return false;
    }
}

/*
const rect1 = new Rectangle(0, 1, 1, 2),
    rect2 = new Rectangle(1, 1, 1, 2), //rect1 should collide with rect2
    rect3 = new Rectangle(12, 60, 1, 2), //rect1 should not collide with rect3
    rect4 = new Rectangle(0, 2, 1, 2); // rect1 should collide with rect4
console.log(rect1.collides(rect2), rect1.collides(rect3), rect1.collides(rect4));
*/

const randInt = (min, max) => Math.random() * (max - min) + min;
const rectsArray = [];
for (let i = 0; i < 1000; i++) {
    currentRect = new Rectangle(
        randInt(-1000, 1000),
        randInt(-1000, 1000),
        randInt(-1000, 1000),
        randInt(-1000, 1000)
    );
    rectsArray.push(currentRect);
}
for (let i = 0; i < rectsArray.length; i++) { //for each rectangle in rectsArray
    for (let j = i + 1; j < rectsArray.length; j++) { //for each rectangle after the current in the list
        if (rectsArray[i].collides(rectsArray[j])) { //if collides is true
            console.log(`${i} collides with ${j}`);
        }
    }
}
