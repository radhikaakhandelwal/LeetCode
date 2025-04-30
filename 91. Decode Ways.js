/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = s.charAt(0) === '0' ? 0 : 1


    for(let i = 2; i <= n; i++){
        let oneChar = Number(s.slice(i-1, i))
        let twoChar = Number(s.slice(i-2, i))
        if( oneChar > 0) dp[i] += dp[i-1]
        if(twoChar >=10 && twoChar< 27) dp[i] += dp[i-2]
    }
    return dp[n]
};

//BRUTE FORCE:
// O(2^n) - use decision tree
// var numDecodings = function(s) {
//     const set = new Set();
//     for (let i = 1; i <= 26; i++) {
//         set.add(i.toString());
//     }

//     const n = s.length;
//     const dp = Array(n + 1).fill(0);
//     dp[n] = 1; // Base case: one way to decode an empty string

//     for (let i = n - 1; i >= 0; i--) {
//         if (set.has(s.slice(i, i + 1))) {
//             dp[i] += dp[i + 1];
//         }
//         if (i + 1 < n && set.has(s.slice(i, i + 2))) {
//             dp[i] += dp[i + 2];
//         }
//     }

//     return dp[0];
// };
