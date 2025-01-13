

function selectionSort(arr){
    for(let i = 0;i<arr.length - 1;i++){
        let minIndex = i
        for(j = i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

const arr =[8,20,-2,4,-6]
console.log(selectionSort(arr));