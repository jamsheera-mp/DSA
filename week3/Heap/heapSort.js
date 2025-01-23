

function heapSort(array) {
    const n = array.length;

    // Build a Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (maximum element) with the last element
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }

    return array;
}

// Function to maintain the Max Heap property
function heapify(array, heapSize, rootIndex) {
    let largest = rootIndex; // Initialize largest as root
    const leftChild = 2 * rootIndex + 1; // Left child index
    const rightChild = 2 * rootIndex + 2; // Right child index

    // Check if the left child is larger than the root
    if (leftChild < heapSize && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    // Check if the right child is larger than the current largest
    if (rightChild < heapSize && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    // If the largest is not the root, swap and continue heapifying
    if (largest !== rootIndex) {
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
        heapify(array, heapSize, largest);
    }
}

// Example Usage
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr);

const sortedArray = heapSort(arr);
console.log("Sorted Array:", sortedArray); // Output: [5, 6, 7, 11, 12, 13]
