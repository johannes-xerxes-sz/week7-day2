// const arr = [12, 3, 14, 18, 2, 7, 9]

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length/2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right)
}

const merge = (left, right) => {
    let results = []; 
    let i = 0; 
    let j = 0; 
    while(i < left.length && j < right.length) {
        if (right[j] > left[i]) {
            results.push(left[i]); 
            i++; 
        } else {
            results.push(right[j]); 
            j++; 
        }
    }

    //push the remaning values to the results array for both 
    while (i < left.length) {
        results.push(left[i])
        i++; 
    }

    while (j < right.length) {
        results.push(right[j])
        j++; 
    }

    return results
}

console.log(mergeSort([12, 3, 14, 18, 2, 7, 9]))