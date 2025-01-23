class MinHeap {
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

            if (this.heap[index] >= this.heap[parentIndex]) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }
}

// Example Usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
minHeap.insert(8);
console.log("Min Heap:", minHeap.heap); // Output: [8, 15, 20, 17, 10]
console.log("Extract Min:", minHeap.extractMin()); // Output: 8
console.log("After Extract:", minHeap.heap); // Output: [10, 15, 20, 17]
