class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    
}

// sanity check
const newHash = new HashTable(50);
console.log("*******************Hash Table*******************");
console.log(newHash);
newHash.set("apples", 10);
console.log(newHash);
