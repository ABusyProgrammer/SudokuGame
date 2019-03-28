var assert = require("assert");

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

describe('GetQuadrantData Function', function()
{
    it('It should return the correct quadrant data out', function()
    {
        assert.equal("0_0", GetQuadrantData(0, 0));
        assert.equal("0_0", GetQuadrantData(0, 1));
        assert.equal("0_0", GetQuadrantData(0, 2));
        assert.equal("0_0", GetQuadrantData(1, 0));
        assert.equal("0_0", GetQuadrantData(1, 1));
        assert.equal("0_0", GetQuadrantData(1, 2));
        assert.equal("0_0", GetQuadrantData(2, 0));
        assert.equal("0_0", GetQuadrantData(2, 1));
        assert.equal("0_0", GetQuadrantData(2, 2));

        assert.equal("0_1", GetQuadrantData(0, 3));
        assert.equal("0_1", GetQuadrantData(0, 4));
        assert.equal("0_1", GetQuadrantData(0, 5));
        assert.equal("0_1", GetQuadrantData(1, 3));
        assert.equal("0_1", GetQuadrantData(1, 4));
        assert.equal("0_1", GetQuadrantData(1, 5));
        assert.equal("0_1", GetQuadrantData(2, 3));
        assert.equal("0_1", GetQuadrantData(2, 4));
        assert.equal("0_1", GetQuadrantData(2, 5));

        assert.equal("1_0", GetQuadrantData(3, 0));
        assert.equal("1_0", GetQuadrantData(4, 0));
        assert.equal("1_0", GetQuadrantData(5, 0));
        assert.equal("1_0", GetQuadrantData(3, 1));
        assert.equal("1_0", GetQuadrantData(4, 1));
        assert.equal("1_0", GetQuadrantData(5, 1));
        assert.equal("1_0", GetQuadrantData(3, 2));
        assert.equal("1_0", GetQuadrantData(4, 2));
        assert.equal("1_0", GetQuadrantData(5, 2));

        assert.equal("1_1", GetQuadrantData(3, 3));
        assert.equal("1_1", GetQuadrantData(3, 4));
        assert.equal("1_1", GetQuadrantData(3, 5));
        assert.equal("1_1", GetQuadrantData(4, 3));
        assert.equal("1_1", GetQuadrantData(4, 4));
        assert.equal("1_1", GetQuadrantData(4, 5));
        assert.equal("1_1", GetQuadrantData(5, 3));
        assert.equal("1_1", GetQuadrantData(5, 4));
        assert.equal("1_1", GetQuadrantData(5, 5));

        assert.equal("0_2", GetQuadrantData(0, 6));
        assert.equal("0_2", GetQuadrantData(0, 7));
        assert.equal("0_2", GetQuadrantData(0, 8));
        assert.equal("0_2", GetQuadrantData(1, 6));
        assert.equal("0_2", GetQuadrantData(1, 7));
        assert.equal("0_2", GetQuadrantData(1, 8));
        assert.equal("0_2", GetQuadrantData(2, 6));
        assert.equal("0_2", GetQuadrantData(2, 7));
        assert.equal("0_2", GetQuadrantData(2, 8));

        assert.equal("2_0", GetQuadrantData(6, 0));
        assert.equal("2_0", GetQuadrantData(6, 1));
        assert.equal("2_0", GetQuadrantData(6, 2));
        assert.equal("2_0", GetQuadrantData(7, 0));
        assert.equal("2_0", GetQuadrantData(7, 1));
        assert.equal("2_0", GetQuadrantData(7, 2));
        assert.equal("2_0", GetQuadrantData(8, 0));
        assert.equal("2_0", GetQuadrantData(8, 1));
        assert.equal("2_0", GetQuadrantData(8, 2));

        assert.equal("1_2", GetQuadrantData(3, 6));
        assert.equal("1_2", GetQuadrantData(3, 7));
        assert.equal("1_2", GetQuadrantData(3, 8));
        assert.equal("1_2", GetQuadrantData(4, 6));
        assert.equal("1_2", GetQuadrantData(4, 7));
        assert.equal("1_2", GetQuadrantData(4, 8));
        assert.equal("1_2", GetQuadrantData(5, 6));
        assert.equal("1_2", GetQuadrantData(5, 7));
        assert.equal("1_2", GetQuadrantData(5, 8));

        assert.equal("2_1", GetQuadrantData(6, 3));
        assert.equal("2_1", GetQuadrantData(6, 4));
        assert.equal("2_1", GetQuadrantData(6, 5));
        assert.equal("2_1", GetQuadrantData(7, 3));
        assert.equal("2_1", GetQuadrantData(7, 4));
        assert.equal("2_1", GetQuadrantData(7, 5));
        assert.equal("2_1", GetQuadrantData(8, 3));
        assert.equal("2_1", GetQuadrantData(8, 4));
        assert.equal("2_1", GetQuadrantData(8, 5));

        assert.equal("2_2", GetQuadrantData(6, 6));
        assert.equal("2_2", GetQuadrantData(6, 7));
        assert.equal("2_2", GetQuadrantData(6, 8));
        assert.equal("2_2", GetQuadrantData(7, 6));
        assert.equal("2_2", GetQuadrantData(7, 7));
        assert.equal("2_2", GetQuadrantData(7, 8));
        assert.equal("2_2", GetQuadrantData(8, 6));
        assert.equal("2_2", GetQuadrantData(8, 7));
        assert.equal("2_2", GetQuadrantData(8, 8));
    })
});