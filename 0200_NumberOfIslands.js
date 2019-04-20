// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const high = grid.length;
    const width = high && grid[0].length;
    let count = 0;
    
    let dfs = (row, column) => {
        if(row < 0 || column < 0 || row === high || column === width) return;
        if(grid[row][column] === '0') return;
        
        grid[row][column] = '0'; // visited
        dfs(row - 1, column);
        dfs(row + 1, column);
        dfs(row, column - 1);
        dfs(row, column + 1);
    }
    
    for(let r = 0; r < high; r++){
        for(let c = 0; c < width; c++){
            if(grid[r][c] === '0') continue;
            count++;
            dfs(r, c);
        }
    }
    return count;
};

// input
let islandsArray = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

// output = 1;
console.log(numIslands(islandsArray));