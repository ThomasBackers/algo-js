const calcDistance = (A, B) => {
    /**returns the distance between two points in a 2D space*/
    return Math.sqrt(
        Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2)
    );
}
console.log(calcDistance([-2, 2], [2, -2]));
