var assert = require("assert");

var board = new Array(100);
for (var counter = 0; counter < 100; counter++)
{
    board[counter] = counter % 9;
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

// Tests the SetBoard Value Function
describe('SetBoardIndexValue Function', function()
{
    it('It should return a value from the board', function()
    {
        GetBoardIndexValue(2, 3)
    })
});