const Square = require("./Square");

class Map {
    constructor(width, height) {
        this.topLeft = new Square()
        let squaresWide = 1;
        let squaresHigh = 1;
        let currentSquare = this.topLeft;
        while (squaresWide < width) {
            currentSquare.add.right();
            currentSquare = currentSquare.move.right();
            squaresWide++;
        }
        currentSquare = this.topLeft;
        while (currentSquare) {
            let currentSquareDown = currentSquare;
            while (squaresHigh < height) {
                currentSquareDown.add.down();
                currentSquareDown = currentSquareDown.move.down();
                squaresHigh++;
            }
            squaresHigh = 1;
            currentSquare = currentSquare.move.right();
        }
    }
}

module.exports = Map;