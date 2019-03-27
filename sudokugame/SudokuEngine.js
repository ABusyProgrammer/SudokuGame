/*
 * Date Made  - 26 - March - 2019 @ 10:01 PM
 * Course     - Principles of Software and Requirements for Engineering | SOFE 2720u
 *
 * Purpose:
 *      - Major Project | Iterable #1 - Sudoku Game Implementation | Javascript Engine File
 *
 * About:
 *      - The main purpose of this program is to serve as the back engine for the core sudoku algorithm. These functions
 *        work together to create a solvable sudoku puzzle, and print it to the web-page
 *
 * Input      - User-Input to the Puzzle
 * Output     - Updating the User Interface, and notifying the user of invalid moves
 */

// Define a variable to hold the board
var board;

/**
 * RandomNumberGenerator() function:
 * - Returns a random number that is not larger than the parameter value
 *
 * @param max The upper-bound of the random number range
 * @returns {number} The rnadom number
 */
function RandomNumberGenerator(max)
{
    // The math function to generate a random number
    return Math.floor(Math.random() * max);
}

/**
 * GetQuadrantData() function:
 * - Returns quadrant-row and quadrant-column of the given row and column
 *
 * @param row The row number passed in to the function
 * @param column The column number passed in to the function
 * @returns {string}
 */
function GetQuadrantData(row, column)
{
    // Define a variable to hold the quadrant-row and quadrant-column
    var quadrantRow;

    // If it is rows 0-2, then the quadrant row is 0
    if (row < 3)
        quadrantRow = 0;

    // Else if it is rows 6-8, then the quadrant row is 2
    else if (row > 5)
        quadrantRow = 2;

    // Else if it is rows 3-5, then the quadrant row is 1
    else
        quadrantRow = 1;


    // If it is columns 0-2, then the quadrant row is 0; return the final quadrant row and column as a key-string
    if (column < 3)
        return "" + quadrantRow + "_" + 0;

    // Else if it is columns 6-8, then the quadrant row is 2; return the final quadrant row and column as a key-string
    else if (column > 5)
        return "" + quadrantRow + "_" + 2;

    // Else if it is columns 3-5, then the quadrant row is 1; return the final quadrant row and column as a key-string
    else
        return "" + quadrantRow + "_" + 1;

}

/**
 *
 * @param which
 * @returns {boolean}
 */
function changed(which)
{
    //get the row and the column of "which"
    var rc = which.getAttribute("id");
    //alert(rc);
    var r = rc.slice(6, 7);
    var c = rc.slice(8, 9);

    //check the same row for any other ones
    for (var cc = 0; cc < 9; cc++) {
        if (!(cc == c)) {
            var otherSelected = document.getElementById("select" + r + "_" + cc);
            if (otherSelected.selectedIndex === which.selectedIndex) {
                alert('There is already that number in the same row.  Please select another value');
                which.selectedIndex = 0;
                return false;
            }
        }

    }


    //check the same column
    for (var rr = 0; rr < 9; rr++) {
        if (!(rr == r)) {
            var otherSelected = document.getElementById("select" + rr + "_" + c);
            if (otherSelected.selectedIndex === which.selectedIndex) {
                alert('There is already that number in the same column.  Please select another value');
                which.selectedIndex = 0;
                return false;
            }
        }

    }

    //check in the same quadrant

    var myQ = GetQuadrantData(r, c);
    for (var r1 = 0; r1 < 9; r1++) {
        for (var c1 = 0; c1 < 9; c1++) {
            if (r1 == r && c1 == c)
                continue;
            if (myQ === GetQuadrantData(r1, c1)) {
                //    alert(GetQuadrantData(r1,c1));
                var otherSelected = document.getElementById("select" + r1 + "_" + c1);
                if (which.selectedIndex === otherSelected.selectedIndex) {
                    alert('There is already that number in the same quadrant.  Please select another value');
                    which.selectedIndex = 0;
                    return false;
                }
            }
        }
    }

    //check if win
    var win = true;
    for (var rz = 0; rz < 9; rz++) {
        for (var cz = 0; cz < 9; cz++) {
            var s = document.getElementById("select" + rz + "_" + cz);
            if (s.selectedIndex === 0) {
                win = false;
                break;
            }
        }
        if (!win) {
            break;
        }
    }

    if (win) {
        alert("You win the game!");
    }

}

/**
 * OpenSeveral() Function:
 * - Pre-fills the board with a fixed set of values
 */
function OpenSeveral()
{
    // Number of table items to pre-fill
    var many = 30;

    // For each item to pre-fill
    for (var i = 0; i < many; i++)
    {
        // Generate a random index
        var r = RandomNumberGenerator(9);
        var c = RandomNumberGenerator(9);

        // Set that value in the board
        var drp = document.getElementById("select" + r + "_" + c);
        drp.selectedIndex = board[r * 9 + c];
    }
}

/**
 * GenerateTable() Function:
 * - A function that generates the Sudoku Table in the HTML page
 */
function GenerateTable()
{
    // Get the corresponding ID from the HTML page
    var table = document.getElementById("sudokuTable");

    // Iterate over all the rows of the table
    for (var rowNumber = 0; rowNumber < 9; rowNumber++)
    {
        // Insert a row into the table
        var row = table.insertRow(rowNumber);

        // For each item in the current row
        for (var columnNumber = 0; columnNumber < 9; columnNumber++)
        {
            // Insert the value at that specific cell
            // Define the HTML data-filling of the cell tag
            var cell = row.insertCell(columnNumber);
            cell.innerHTML =
                    "<select id='select" + rowNumber + "_" + columnNumber + "' onchange='changed(this);'>" +
                    "<option value='0' selected> </option>" +
                    "<option value='1' > 1</option>" +
                    "<option value='2' > 2</option>" +
                    "<option value='3' > 3</option>" +
                    "<option value='4' > 4</option>" +
                    "<option value='5' > 5</option>" +
                    "<option value='6' > 6</option>" +
                    "<option value='7' > 7</option>" +
                    "<option value='8' > 8</option>" +
                    "<option value='9' > 9</option>" +
                    "</select>"
            ;
        }
    }
}

/**
 * ColumnSwap() Function
 * - Makes a Column Swap on the board
 */
function ColumnSwap()
{
    // Define the band (between 0 and 2)
    var band = RandomNumberGenerator(3);    //band 0,1,2  (rows are within the same band)

    // Define 2 distinct random numbers for c1 and c2 that do not exceed or fall below the band value's range (0 - 2)
    var c1 = 0, c2 = 0;
    while (c1 === c2)
    {
        c1 = RandomNumberGenerator(3);
        c2 = RandomNumberGenerator(3);
    }

    // Calculate the column value as per the entire board, not just the quadrant
    var cc1 = band * 3 + c1;
    var cc2 = band * 3 + c2;

    //rr1 and rr2 are within the same band.  swap them
    // Go vertically (across each column)
    // Iterate over the entire column
    for (var row = 0; row < 9; row++)
    {
        // Swap the 2 values
        var temp = GetBoardIndexValue(row, cc1);
        SetBoardIndexValue(row, cc1, GetBoardIndexValue(row, cc2)); // board[r][cc1] = board[r][cc2];
        SetBoardIndexValue(row, cc2, temp);//        board[r][cc2] = temp;
    }
}

/**
 * RowSwap() Function
 * - Makes a Row Swap on the board
 */
function RowSwap() {

    // This returns a random value of 0, 1, or 2
    var band = RandomNumberGenerator(3);

    // Define 2 variables and get one random value for each one (it should fall within 0-2, same range as the band)
    // r1 and r2 should not have the same value
    var r1 = 0, r2 = 0;
    while (r1 === r2)
    {
        r1 = RandomNumberGenerator(3);
        r2 = RandomNumberGenerator(3);
    }

    // Calculate rr1 and rr2
    // rr1 and rr2 are within the same band. Swap them
    var rr1 = band * 3 + r1;
    var rr2 = band * 3 + r2;

    // Iterate over the entire row
    // Go horizontally across the board (across each row)
    // Elements are swapped
    for (var column = 0; column < 9; column++)
    {
        // Swap the values at rr1 and rr2
        var temp = GetBoardIndexValue(rr1, column);  //board[rr1][c];
        SetBoardIndexValue(rr1, column, GetBoardIndexValue(rr2, column)); //board[rr1][c] = board[rr2][c];
        SetBoardIndexValue(rr2, column, temp);//  board[rr2][c] = temp;
    }
}

/**
 * SetBoardIndexValue() Function:
 * - A function that sets a particular square of the puzzle to a certain value
 *
 * @param row The current row
 * @param column The current column
 * @param value The value to set at the current row and column index
 */
function SetBoardIndexValue(row, column, value)
{
    // Get the specific index for the row-column combination
    // Set that value in the board
    var index = row * 9 + column;
    board[index] = value;
}

/**
 * GetBoardIndexValue() Function
 * - A function that gets the value at a particular square of the puzzle
 *
 * @param row The row being searched
 * @param column The column being searched
 * @returns {*} The value at that row-column index
 */
function GetBoardIndexValue(row, column)
{
    // Get the index based on the row and column
    // Return the value at that index
    var index = row * 9 + column;
    return board[index];
}

/**
 * GenerateBoard() Function:
 * - A function that sets up the Sudoku Board
 */
function GenerateBoard()
{
    // Define the board of the game
    board =
            [
                1, 2, 3, 4, 5, 6, 7, 8, 9,
                4, 5, 6, 7, 8, 9, 1, 2, 3,
                7, 8, 9, 1, 2, 3, 4, 5, 6,

                3, 1, 2, 6, 4, 5, 9, 7, 8,
                5, 6, 4, 9, 7, 8, 3, 1, 2,
                9, 7, 8, 3, 1, 2, 6, 4, 5,

                2, 3, 1, 5, 6, 4, 8, 9, 7,
                6, 4, 5, 8, 9, 7, 2, 3, 1,
                8, 9, 7, 2, 3, 1, 5, 6, 4
            ];

    // For about 100 swaps, perform a row-swap and a column-swap operation
    for (var counter = 0; counter < 100; counter++)
    {
        RowSwap();
        ColumnSwap();
    }

}