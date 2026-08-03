class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const conditions = (num) => ({
            [`0${num}`]: { left: 1, top: 1 },
            /**
             * same thing but oppsite with the last row
             * bottom is always 1
             */
        });
        let perimeter = 0;
        for (let i = 0; i < grid.length; i++) {
            console.log(grid[i]);
            for (let j = 0; j < grid[i].length; j++) {
                console.log(grid[i][j]);
                if (i === 0 && grid[i][j] === 1) {
                    perimeter++;
                    // automatically upper side is + 1
                }
                if (j === 0 && grid[i][j] === 1) {
                    perimeter++;
                    // automatically left side is + 1
                }
                if (j === grid[i].length - 1 && grid[i][j] === 1) {
                    perimeter++;
                    // automatically right side is + 1
                }

                // here we take care of neighbors
                if (grid[i][j] === 1) {
                    // if i is first dont check upper
                    // and j is 0 don't left
                    // if i is last don't check

                    if (j !== grid[i].length - 1) {
                        if (grid[i][j+1] === 0) {
                            perimeter++;
                        }
                    }

                    if (j !== 0) {
                        if (grid[i][j-1] === 0) {
                            perimeter++;
                        }
                    }

                    if (j !== 0 && i !== 0) {
                        if (grid[i - 1][j] === 0) {
                            perimeter++;
                        }
                    }

                    if (j !== grid.length - 1 && i !== grid.length - 1) {
                        if (grid[i + 1][j] === 0) {
                            perimeter++;
                        }
                    }





                    // so im left with if im 1 and not all up there
                    // i check my nieghbors 
                    // that means if im 1 and my right is 0
                    // i count ++
                    // if im 1 and my down is 0 i count ++
                    // if im 1 and my left is 0 i count ++
                    // if im 1 and my up is 0 i count ++
                }

                if (i === grid.length - 1 && grid[i][j] === 1) {
                    perimeter++;
                    // automatically down side is + 1
                }

            }
        }
        return perimeter;
    }
}
