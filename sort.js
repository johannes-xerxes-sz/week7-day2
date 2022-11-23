const arr = [12, 3, 14, 18, 2, 7, 9]
// Start by visualizing the sorting algorithm and solve without looking at the class notes!
// Please sort from smallest to largest using:

/* const mergeSortMethod = (arr) => {
    if ( arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSortMethod(arr.slice(0, middle));
    let right = mergeSortMethod(arr.slice(middle));
    return merge(left, right)

}

const merge = ( left, right) => {
    newArr = []
    let i = 0, j =0;

    while (i < left.length && j < right.length) {
        if (right[j] > left [i]) {
            newArr.push(left[i])
            i++; 
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        newArr.push(left[i])
        i++;
    }
    while (j < right.length) {
        newArr.push(right[j])
        j++;
    }
    return newArr

}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('merge: ')
console.log(mergeSortMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')  */


const quickSortMethod = (arr,  left = 0, right = arr.length - 1) => {

        if (left < right) {
          let pivotIndex = pivot(arr, left, right)
          quickSortMethod(arr, left, pivotIndex - 1)
          quickSortMethod(arr, pivotIndex + 1, right)
        }
        return arr
}
const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, index1, index2) => {
      let temp = arr[index1]
      arr[index1] = arr[index2]
      arr[index2] = temp
    }
  
    let pivotIndex = arr[start]
    let swapIndex = start
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotIndex) {
        swapIndex++
        swap(arr, swapIndex, i)
      }
    }
  
    swap(arr, start, swapIndex)
  
    return swapIndex
  }
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('quickSortMethod: ')
console.log(quickSortMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')