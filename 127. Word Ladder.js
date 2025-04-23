/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// Bi-directional BFS approach 
//  Instead of exploring the entire tree from one side (O(N)), we explore from both sides and meet in the middle, making it roughly O(N/2) in practice
// O(N * L) N = wordList.length, L = word length
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    if(!wordSet.has(endWord)) return 0

    let endSet = new Set()
    endSet.add(endWord)
    let beginSet = new Set()
    beginSet.add(beginWord)
    let visited = new Set()
    let level = 1

    while(endSet.size > 0 && beginSet.size > 0){
        if(beginSet.size > endSet.size){
            [beginSet, endSet] = [endSet, beginSet]
        }
        let newSet = new Set()

        for(let word of beginSet){
            for(let i = 0; i < word.length; i++){
                for(let c = 97; c < 123; c++){
                    let letter = String.fromCharCode(c)
                    let newWord = word.slice(0,i) + letter + word.slice(i+1)

                    if(endSet.has(newWord)) return level + 1

                    if(wordSet.has(newWord) && !visited.has(newWord)){
                        newSet.add(newWord)
                        visited.add(newWord)
                    }
                }
            }
        }

        beginSet = newSet
        level++
    }
    return 0
};
