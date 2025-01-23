

function heapify(array, heapSize, rootIndex) {
    let largest = rootIndex; // Initialize the largest as the root
    const leftChild = 2 * rootIndex + 1; // Left child index
    const rightChild = 2 * rootIndex + 2; // Right child index

    // Check if the left child exists and is greater than the root
    if (leftChild < heapSize && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    // Check if the right child exists and is greater than the current largest
    if (rightChild < heapSize && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    // If the largest is not the root, swap and continue heapifying
    if (largest !== rootIndex) {
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]]; // Swap
        heapify(array, heapSize, largest); // Recursively heapify the affected subtree
    }
}
const array = [4, 10, 3, 5, 1];

// Apply heapify to the root of the heap (index 0)
heapify(array, array.length, 0);

console.log(array); // Output: [10, 5, 3, 4, 1]



