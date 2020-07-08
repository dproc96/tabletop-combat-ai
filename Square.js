class Square {
    constructor() {
        this.isDifficultTerrain = false;
        this.isOccupied = false;
        this.occupant = null;
        this.up = null;
        this.down = null;
        this.left = null;
        this.right = null;
        this.upLeft = null;
        this.upRight = null;
        this.downLeft = null;
        this.downRight = null;
        const squareObj = this;
        this.move = {
            up() {
                return squareObj.up;
            },
            down() {
                return squareObj.down;
            },
            left() {
                return squareObj.left;
            },
            right() {
                return squareObj.right;
            },
            upLeft() {
                return squareObj.upLeft;
            },
            upRight() {
                return squareObj.upRight;
            },
            downLeft() {
                return squareObj.downLeft;
            },
            downRight() {
                return squareObj.downRight;
            }
        }
        this.set = {
            up(square) {
                squareObj.setAdjacent(square, "up")
                square.setAdjacent(squareObj, "down")
            },
            down(square) {
                squareObj.setAdjacent(square, "down")
                square.setAdjacent(squareObj, "up")
            },
            left(square) {
                squareObj.setAdjacent(square, "left")
                square.setAdjacent(squareObj, "right")
            },
            right(square) {
                squareObj.setAdjacent(square, "right")
                square.setAdjacent(squareObj, "left")
            },
            upLeft(square) {
                squareObj.setAdjacent(square, "upLeft")
                square.setAdjacent(squareObj, "downRight")
            },
            upRight(square) {
                squareObj.setAdjacent(square, "upRight")
                square.setAdjacent(squareObj, "downLeft")
            },
            downLeft(square) {
                squareObj.setAdjacent(square, "downLeft")
                square.setAdjacent(squareObj, "upRight")
            },
            downRight(square) {
                squareObj.setAdjacent(square, "downRight")
                square.setAdjacent(squareObj, "upLeft")
            }
        }
        this.add = {
            up() {
                const square = new Square()
                squareObj.set.up(square);
                if (squareObj.upLeft) {
                    squareObj.upLeft.set.right(square);
                }
                if (squareObj.upRight) {
                    squareObj.upRight.set.left(square);
                }
                if (squareObj.left) {
                    squareObj.left.set.upRight(square);
                }
                if (squareObj.right) {
                    squareObj.right.set.upLeft(square);
                }
            },
            down() {
                const square = new Square()
                squareObj.set.down(square);
                if (squareObj.downLeft) {
                    squareObj.downLeft.set.right(square);
                }
                if (squareObj.downRight) {
                    squareObj.downRight.set.left(square);
                }
                if (squareObj.left) {
                    squareObj.left.set.downRight(square);
                }
                if (squareObj.right) {
                    squareObj.right.set.downLeft(square);
                }
            },
            left() {
                const square = new Square()
                squareObj.set.left(square);
                if (squareObj.downLeft) {
                    squareObj.downLeft.set.up(square);
                }
                if (squareObj.upLeft) {
                    squareObj.upLeft.set.down(square);
                }
                if (squareObj.down) {
                    squareObj.down.set.upLeft(square);
                }
                if (squareObj.up) {
                    squareObj.up.set.downLeft(square);
                }
            },
            right() {
                const square = new Square()
                squareObj.set.right(square);
                if (squareObj.downRight) {
                    squareObj.downRight.set.up(square);
                }
                if (squareObj.upRight) {
                    squareObj.upRight.set.down(square);
                }
                if (squareObj.down) {
                    squareObj.down.set.upRight(square);
                }
                if (squareObj.up) {
                    squareObj.up.set.downRight(square);
            }
        }
    }
}
    setAdjacent(square, direction) {
        if (square instanceof Square) {
            if (["up", "down", "left", "right", "upLeft", "upRight", "downLeft", "downRight"].indexOf(direction) > -1) {
                this[direction] = square;
            }
            else {
                throw new Error(`Direction must be one of the following: "up", "down", "left", "right", "upLeft", "upRight", "downLeft", "downRight" but given direction was ${direction}`);
            }
        }
        else {
            throw new Error("Can only set a square adjacent to another square");
        }
    }
    makeDifficultTerrain() {
        this.isDifficultTerrain = true;
    }
    removeDifficultTerrain() {
        this.isDifficultTerrain = false;
    }
    addOccupant(occupant) {
        this.occupant = occupant;
        this.isOccupied = true;
    }
    removeOccupant() {
        this.occupant = null;
        this.isOccupied = false;
    }
}

module.exports = Square;