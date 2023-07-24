/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(() => new Array(n).fill(0));
    console.log(dp)
    for(let i = 0; i < m&&obstacleGrid[i][0] === 0 ; i++) {
        dp[i][0] = 1;
    }

    for(let i = 0; i < n&&obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(!obstacleGrid[i][j]){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
            else dp[i][j] = 0;
        }
    }
    return dp[m - 1][n - 1];
};

const res = uniquePathsWithObstacles([[0,1],[0,0]])
