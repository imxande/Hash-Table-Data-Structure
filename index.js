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
    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        if (!this.data.length){
            return undefined;
        }
        const result = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i] && this.data[i].length){
                if (this.data.length > 1){
                    for (let j = 0; j < this.data[i].length; j++){
                        result.push(this.data[i][j][0]);
                    }
                }
                else {
                    result.push(this.data[i][0]);
                }
            }
        }
        return result;
    }
}

// sanity check
const newHash = new HashTable(50);
console.log("*******************Hash Table*******************");
console.log(newHash);
newHash.set("apples", 10);
console.log(newHash);
const myApples = newHash.get("apples");
console.log(myApples);
console.log(newHash.keys());
