//Given this array: 
const arr = [12, 3, 14, 18, 2, 7, 9]
// Start by visualizing the sorting algorithm and solve without looking at the class notes!
// Please sort from smallest to largest using:

const javaScriptMethod = (arr) => {
    
    let numbers = arr;
    numbers.sort(function(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        });
        return numbers
}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('javascriptMethod: ')
console.log(javaScriptMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-') 

const bubbleSortMethod = (arr) => {

    for (let k = 0; k <= arr.length-1; k++) {
        for (let i = 0; i < ( arr.length - k -1); i++) {
            if (arr[i] > arr[i + 1])
            {
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp;
            }
        }    

    }
    console.log(arr);

}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('bubbleSortMethod: ')
console.log(bubbleSortMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

const selectionSortMethod = (arr) => {

    for (let k = 0; k <= arr.length; k++) {
        let min = k;
        for(let i = k + 1; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
            if (min != k) {
                [arr[k], arr[min]] = [arr[min], arr[k]]           
            }
        
    }
    console.log(arr);
}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('selectionSortMethod: ')
console.log(selectionSortMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-') 

const insertionSortMethod = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = current
    }
    console.log(arr);

}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('insertionSortMethod: ')
console.log(insertionSortMethod(arr))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')