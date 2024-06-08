// first way
var containDuplicate = fucntion (nums){
    const map = new Map()
    for (const n of nums){
        if(map.has(n)) return true
        map.set(n, true)
    }
    return false
}

// second way
const set = new Set(nums)
return set.size !== nums.length