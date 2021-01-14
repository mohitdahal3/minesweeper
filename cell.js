class Cell {
    constructor(indX, indY, width) {
        this.x = indX;
        this.y = indY;
        this.w = width;
        this.status;
        this.bee = (floor(random(0, 4)) == 1) ? (true) : (false);
        this.revealed = false;
    }

    show() {


        if (this.revealed) {
            if (this.bee) {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        grid[i][j].revealed = true;
                    }
                }
                fill(0)
                stroke(0);
                ellipse((this.x * this.w) + 20, (this.y * this.w) + 20, 20, 20)
                
            } else {
                textSize(20);
                
                fill(0);

                text(this.status, (this.x * this.w) + 15, (this.y * this.w) + 15, 20, 20)
            }
        } else {
            stroke(0);
            strokeWeight(1);
            fill(100);
            rect(this.x * this.w, this.y * this.w, this.w, this.w);
        }
    }

    containMouse(x, y) {
        return ((mouseX > (x * this.w) && mouseX < ((x * this.w) + this.w)) && (mouseY > (y * this.w) && mouseY < ((y * this.w) + this.w)))
    }

    countNeighboursBee(x, y) {
        let neighbourBees = 0;

        for (let i = x - 1; i <= x + 1; i++) {
            if (i < 0 || i > 9) {
                continue
            }
            for (let j = y - 1; j <= y + 1; j++) {
                if (j < 0 || j > 9) {
                    continue
                }
                if (grid[i][j].bee) {
                    neighbourBees++;
                }
            }
        }
        return neighbourBees;
    }

}