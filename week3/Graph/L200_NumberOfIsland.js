
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0
    let numIslands = 0
    const dfs = (i, j) =>{
         // Base Case: If out of bounds or the cell is water, return
       if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
           return;
       }
        // Mark the cell as visited by changing it to '0'
        grid[i][j] = '0'

       // Call DFS on all four neighbors
       dfs(i - 1, j); // up
       dfs(i + 1, j); // down
       dfs(i, j - 1); // left
       dfs(i, j + 1); // right
    }
    for (let i = 0; i < grid.length; i++) {
       for (let j = 0; j < grid[0].length; j++) {
           if (grid[i][j] === '1') {
               numIslands++;
               dfs(i, j); // Mark the entire island as visited
           }
       }
   }
   return numIslands
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  console.log(numIslands(grid));
  
  let grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  console.log(numIslands(grid2));