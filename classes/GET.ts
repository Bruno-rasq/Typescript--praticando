class Test {
    value: number;
    constructor(value: number){
        this.value = value
    }
    
    get val () {
        return this.value
    }
}

const obj = new Test(35)
console.log(obj.val)