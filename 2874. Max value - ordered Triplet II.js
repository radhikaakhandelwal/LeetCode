// Brute force would be O(n*n*n) - 3 for loop and check each triplet

// O(n*n)
// strat iterating from beginning. If nums[j] > nums[i] means differnce would be -ve
// for ideal i and j, traverse remaining array to find ideal k
var maximumTripletValue = function(nums) {
    let max = 0
    let i = 0
    let j = 1

    while(j < nums.length - 1){
        if(nums[j] > nums[i]){
            i = j
            j = i + 1
        }
        else{
            let diff = nums[i] - nums[j]
            for(let k = j+1; k < nums.length; k++){
                max = Math.max(max, diff*nums[k])
            }
            j++
        }
    }
    return max
};

//O(n)
// Most optimal solution
