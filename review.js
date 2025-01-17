let arr=[64, 34, 25, 12, 22, 11, 90]

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i]
        let j= i-1

        while(arr[j]>0 && arr[j]>key){
            arr[j+1] = arr[j]
            j= j-1
        }
        arr[j+1] = key
    }
    return arr
}

console.log(insertionSort(arr));
