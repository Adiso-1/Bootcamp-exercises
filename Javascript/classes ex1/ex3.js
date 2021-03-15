class SortNumber {
    constructor() {
        this.numList = [];
    }
    addNum(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0 || this.numList.includes(num)) {
                return false; 
            }
        }
        this.numList.push(num)
        return true;
    }
    removeNum(num) {
        if (this.numList.includes(num)) {
            if (this.numList.indexOf(num) > -1) {
                this.numList.splice(this.numList.indexOf(num),1)
                return true;
            }
        }
        return false;
    }
    getAll() {
        return this.numList;
    }
    print() {
        console.log(this.numList);
    }
    share(arr) {
        const sharePrime = this.getAll().filter(a => arr.getAll().includes(a))
        return sharePrime.length;
    }
    union(arr) {
        const unionArray = [...this.getAll()];
        arr.getAll().forEach((el) => {
            if (!this.getAll().includes(el)) {
                unionArray.push(el)
            }
        })
        return unionArray;
    }
}

const newArr = new SortNumber();
const newArr2 = new SortNumber();
newArr.addNum(1)
newArr.addNum(2)
newArr.addNum(3)
newArr.addNum(7)

newArr2.addNum(7)
newArr2.addNum(13)
// console.log(newArr.share(newArr2));
console.log(newArr.union(newArr2));