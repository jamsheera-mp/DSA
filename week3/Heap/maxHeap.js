
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[index] <= this.heap[parentIndex]) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }

            if (largest === index) break;

            this.swap(index, largest);
            index = largest;
        }
    }
}

// Example Usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);
maxHeap.insert(8);
console.log("Max Heap:", maxHeap.heap); // Output: [20, 17, 10, 15, 8]
console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
console.log("After Extract:", maxHeap.heap); // Output: [17, 15, 10, 8]
