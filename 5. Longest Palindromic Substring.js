//O(n*n) SOLUTION:
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ""
    let resLen = 0
    for(let i = 0; i < s.length; i ++){
            //odd length palindrome
            let l = i
            let r = i

            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l + 1 > resLen){
                    resLen = r - l + 1
                    res = s.slice(l, r+1)
                }
                l--
                r++
            }
            //even length palindrome
            l = i
            r = i + 1

            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l + 1 > resLen){
                    resLen = r - l + 1
                    res = s.slice(l, r+1)
                }
                l--
                r++
            }        
    }
    return res
};
