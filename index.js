class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
}

// sanity check
const newHash = new HashTable(50);
console.log("*******************Hash Table*******************");
console.log(newHash);