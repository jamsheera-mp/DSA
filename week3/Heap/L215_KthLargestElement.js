
var findKthLargest = function(nums, k) {
    let result = heapSort(nums)
    return result[nums.length - k]
};

function heapSort(arr){
    let n= arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
   return arr 
}

function heapify(arr,heapSize,rootIndex){
    let largest = rootIndex
    let leftChild = rootIndex * 2 + 1
    let rightChild = rootIndex * 2 + 2

    if(leftChild < heapSize && arr[leftChild] > arr[largest] ){
        largest = leftChild
    }
    if(rightChild < heapSize && arr[rightChild] > arr[largest]){
        largest = rightChild
    }

    if(largest !== rootIndex){
        [arr[rootIndex],arr[largest]] = [arr[largest],arr[rootIndex]] 
        heapify(arr,heapSize,largest)
    }
    
}
let nums = [3,2,1,5,6,4]
let k = 2
console.log(heapSort(nums));
console.log(findKthLargest(nums,k));



var findKthLargestUsingMinHeap = function(nums, k) {
    const minHeap = [];
    
    const pushHeap = (val) => {
        minHeap.push(val);
        let idx = minHeap.length - 1;
        
        // Bubble up to maintain heap property
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (minHeap[idx] >= minHeap[parentIdx]) break;
            [minHeap[idx], minHeap[parentIdx]] = [minHeap[parentIdx], minHeap[idx]];
            idx = parentIdx;
        }
    };
    
    const popHeap = () => {
        const top = minHeap[0];
        minHeap[0] = minHeap.pop();
        let idx = 0;
        
        // Bubble down to maintain heap property
        while (idx < minHeap.length) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let smallest = idx;
            
            if (leftIdx < minHeap.length && minHeap[leftIdx] < minHeap[smallest]) {
                smallest = leftIdx;
            }
            if (rightIdx < minHeap.length && minHeap[rightIdx] < minHeap[smallest]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;
            [minHeap[idx], minHeap[smallest]] = [minHeap[smallest], minHeap[idx]];
            idx = smallest;
        }
        return top;
    };
    
    // Maintain a min-heap of size k
    for (let num of nums) {
        pushHeap(num);
        if (minHeap.length > k) {
            popHeap(); // Remove the smallest element
        }
    }
    
    return minHeap[0];
};

// Example usage
let nums1 = [3, 2, 1, 5, 6, 4];
let k1 = 2;
console.log(findKthLargestUsingMinHeap(nums, k)); // Output: 5
