//A modulo function which allows for negative values of x
Number.prototype.mod = function (x)
{
    return ((this % x) + x) % x;
}

function Game(rows, cols)
{   
    //member data
    this.rows = rows;
    this.cols = cols;
    
    this.currentGeneration = [];
    this.nextGeneration = [];

    //member functions
    this.numNeighbours = numNeighbours;
    this.step = step;
    this.resetCurrentGeneration = resetCurrentGeneration;
    this.resetNextGeneration = resetNextGeneration;
    this.toggleCell = toggleCell;
    this.toString = toString;

    //init board
    this.resetCurrentGeneration();
    this.resetNextGeneration();
}

/**
 * Set all elements of the currentGeneration array to false
 */
function resetCurrentGeneration()
{
    for (var i = 0; i < this.rows; i++)
    {
        this.currentGeneration[i] = [];
        for (var j = 0; j < this.cols; j++)
        {
            this.currentGeneration[i][j] = false;
        }
    }
}

/**
 * Set all elements of the nextGeneration array to false
 */
function resetNextGeneration()
{
    for (var i = 0; i < this.rows; i++)
    {
        this.nextGeneration[i] = [];
        for (var j = 0; j < this.cols; j++)
        {
            this.nextGeneration[i][j] = false;
        }
    }
}

/**
 * Turns a cell 'on' iff it is 'off'
 * @param {number} row specifies the ith row
 * @param {number} col specifies th jth column
 */
function toggleCell(row, col)
{
    this.currentGeneration[row][col] = !this.currentGeneration[row][col]; //flip the bit
}

/**
 * @return the number of neighbours of element (row, col) which are 'alive'
 */
function numNeighbours(row, col)
{
    var count = 0;
    for (var i = -1; i <= 1; i++)
    {
        for (var j = -1; j <= 1; j++)
        {
            if (i === 0 && j === 0)
            {
                continue; //don't count the element (row, col)
            }
            if (this.currentGeneration[(row + i).mod(this.rows)][(col + j).mod(this.cols)])
            {
                count++;
            }
        }
    }
    return count;
}

/**
 * This method performes one iteration of the Game of Life.
 * The rules for an interation are as follows:
 * 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
 * 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
 * 3. Any live cell with two or three live neighbours lives on to the next generation.
 * 4. Any dead cell with exactly three live neighbours becomes a live cell.
 *
 * @see http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
 */
function step()
{
    for (var i = 0; i < this.rows; i++)
    {
        for (var j = 0; j < this.cols; j++)
        {

            var count = this.numNeighbours(i, j);
            var living = this.currentGeneration[i][j];

            if (living && count < 2 || living && count > 3)
            {
                this.nextGeneration[i][j] = false;
            }
            else if (living && count == 2 || living && count == 3 || !living && count == 3)
            {
                this.nextGeneration[i][j] = true;
            }
        }
    }
    this.currentGeneration = this.nextGeneration.slice();
    this.resetNextGeneration();
}

function toString()
{
    var buffer = [];
    for (var i = 0; i < this.rows; i++)
    {
        for (var j = 0; j < this.rows; j++)
        {
            buffer.push(this.currentGeneration[i][j] ? 'x' + " " : ' ' + " ")
        }
        buffer.push('\n');
    }
    return buffer.join('');
}

(function main()
{
    var game = new Game(50, 50);

    //http://en.wikipedia.org/wiki/File:Game_of_life_acorn.svg
    game.toggleCell(8, 21);
    game.toggleCell(9, 23);
    game.toggleCell(10, 20);
    game.toggleCell(10, 21);
    game.toggleCell(10, 24);
    game.toggleCell(10, 25);
    game.toggleCell(10, 26);

    //http://en.wikipedia.org/wiki/File:Game_of_life_glider.svg
    game.toggleCell(40, 36);
    game.toggleCell(40, 37);
    game.toggleCell(40, 38);
    game.toggleCell(39, 38);
    game.toggleCell(38, 37);
    while (true)
    {
        print(game.toString());
        switch (readline())
        {
        case 's':
            game.step();
            break;
        case 'q':
            print('exiting...');
            return 0;
        }
    }
}
)();
