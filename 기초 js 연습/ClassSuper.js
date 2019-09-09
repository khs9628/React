//parent
class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal(){
        console.log(this.name+"은 "+String(this.leg)+"개의 다리를 가진다.")
    }
}

//child
class Lion extends Animal{
    constructor(name, leg){
        super(leg) //부모의 생성자 (constructor)
        this.name =name
    }
    getName(){
        console.log("내 이름은 "+ this.name)
    }
}

myLion = new Lion("king",4)
myLion.getName() //내 이름은 king
myLion.printAnimal() //king은 4개의 다리를 갖는다.


