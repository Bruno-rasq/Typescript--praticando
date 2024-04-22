//tasks: 
//      add         -check
//      get         -check
//      remove      -check
//      print       -check
//      length      -check

interface LinkedListClass {

    Add(value: number)     : void;
    Print()                : void;
    Length()               : number;
    Get(value: number)     : void;
    Remove(value: number)  : void; 
};

class NODE {

    data: number | null = null;
    next: NODE   | null = null;

    constructor(value: number){
        this.data = value;
    }
};

export class LinkedList implements LinkedListClass {

    public head: NODE | null = null;
    public length: number = 0;

    Add(value: number): void {

        let NewNo = new NODE(value);

        if(!this.head) {
            this.head = NewNo
            this.length++

        } else {

            let NO = this.head
            while(NO && NO.next != null){
                NO = NO.next
            }
            NO.next = NewNo 
            this.length++
        }   

    }

    Print(): void {
        if(this.head){

            let values = []
            let Curr = this.head;

            while(Curr.data && Curr.next){
                values.push(Curr.data)
                Curr = Curr.next
            }

            values.push(Curr.data)
            console.log(values)
            return
        } 

        console.log(-1)
        return 
    }

    Length(): number {
        return this.length    
    }

    Get(value: number): void {

        if(!this.head){
            console.log(-1)

        } else {

            let Curr = this.head
            let response = null

            while(Curr.data != value && Curr.next){
                Curr = Curr.next
            }

            response = Curr

            response.data === value ? console.log(response) : console.log(-1)
        }
    }

    Remove(value: number): void {

        if(!this.head){
            return
        }

        if(value === this.head.data){
            this.head = this.head.next
            this.length--
            return
        }

        let Curr = this.head;
        let aux = null
        while(Curr.next && Curr.next.data != value){
            Curr = Curr.next
        }

        aux = Curr.next // valor a ser removing
        Curr.next = aux ? aux.next : null
        this.length--
        return 
    }
};

const list = new LinkedList();

list.Add(2)
list.Add(4)
list.Add(1)
list.Add(6)
list.Add(7)

list.Print()
// console.log(list.Length())

// list.Remove(2)
// list.Remove(4)
// list.Remove(1)

// list.Print()
// console.log(list.Length())

// list.Get(4)
// list.Get(8)