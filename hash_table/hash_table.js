// let user = {
//   age: 30,
//   name: "Jumaa",
//   magic: true,
//   scream: function () {
//     console.log("AhhhhHHHHhhhh");
//   },
// };

// user.age; // O(1)
// user.spell = "ABRA CADABRA"; // O(1)
// console.log(user); // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, val) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, val]);
      console.log(this.data);
    }
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0]) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("Jumaa", 0);
myHashTable.set("jma", 1);
myHashTable.get("Jumaa");
