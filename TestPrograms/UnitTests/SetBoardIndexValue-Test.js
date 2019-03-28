var assert = require("assert");

var board = new Array(100);
for (var counter = 0; counter < 100; counter++)
{
    board[counter] = counter % 9;
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
    var index = row * 9 + column;
    board[index] = value;

    return board[index]
}

describe('SetBoardIndexValue Function', function()
{
    it('It should set the correct index of the board to the correct given value', function()
    {
        assert.equal(7, SetBoardIndexValue(2, 3, 7))
    })
});