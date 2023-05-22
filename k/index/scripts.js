class Myclass{
    constructor(){
        this.name="Kuppusamy"
        this.age=23
        this.father="Balamani"
        this.mother="Selvi"
        this.email="Kuppusamy@gmail.com"
        this.address={
           city :"Salem",
           state:"Tamilnadu"
        }
        this.education={
            Degree:"B.sc., Mathematics",
            percentage:"70%",
            college:"Salem Sowdeswari College"
        }
        this.hobby=`listen music and travel,play cricket and vollyball,intrested in all games`
    }
 
      resume (){
         let result=`My name is ${this.name},
 My Father name is ${this.father},
My Mother name is ${this.mother},
 I am living in ${this.address.city} city,
 ${this.address.state} state, 
 I have completed from bacholer's degree in ${this.education.Degree} with ${this.education.percentage} percentage
with ${this.education.college} ,My hobbies are ${this.hobby}`
                    return result
    }
}
let obj1=new Myclass();
console.log(obj1.resume());



