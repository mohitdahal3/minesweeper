let grid;
let rows = 10;
let cols = 10;

function make2darray(rows1, cols1) {
    let arr = new Array(rows1);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols1);
    }
    return arr
}


function setup() {
    createCanvas(401, 401);
    grid = make2darray(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Cell(i, j, 40);
        }
    }
}

function draw() {
    background(255)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }

    for (let i = 0; i < width ; i+=40){
        line(i, 0, i , height);
    }
    
    for (let i = 0; i < height ; i+=40){
        line(0, i, width, i);
    }
    
}



function mouseClicked(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j].containMouse(i, j)) {
                grid[i][j].status = grid[i][j].countNeighboursBee(i,j)
                grid[i][j].revealed = true;
                
                
            }
        }
    }
}