// how to declare object

let student={
    sname:"shob",
    sid:101,
    isStudent:true,
    skills:["html","css","js"],
    work :()=>{
        console.log("eat sleep repeat")
    },
    address :{
        city : "chennai",
        state :"tamilnadu"
    }
}

console.log(student)

//how to access object properties

console.log(student.sname)

console.log(student.skills[1])//css

student.work()

console.log(student.address.city)


let emp={
    ename: "miller",
    eid:2001,
    salary:200000,
}

// how to update any property value

console.log(emp)

emp.eid=3001

console.log(emp)

//how to add any property

emp.phno=9876543217
console.log(emp)

// how to delete any property

 delete emp.eid
 console.log(emp)

 // object method

//  1.object.keys()
//  is it used to return all the keys in the form of array

let player ={
    playerName: "virat",
    iscaptain:true,
    age:35

}

let keys=Object.keys(player)

console.log(keys)

// 2.object.values()
//it is used to return all the value in the form of array.

let values=Object.values(player)
console.log(values)

// 3.object .entries()
//  it will return one nested array wherer all the key values pair will be store in one  one array

let key_values=Object.entries(player)
console.log(key_values)

//4.object.freeze()

//this method is used to make any object frozen,then we can't add or modify or delete any property from the  object

let ob1={
    obName:"pen",
    price:20
}

console.log(ob1)

Object.freeze(ob1)

ob1.price=50 //we cannot modify
delete ob1.price  // we cannot delete
ob1.color="red" // we cannot add

console.log(ob1)

// 5. object.isfrozen()

//this method is used to know the object is frozen or not.
//  if it is frozen it will give true else it will give false

console.log(Object.isFrozen(ob1)) //true

console.log(Object.isFrozen(emp)) //false

//6.object.seal()

//this method is similat to object.freeze(),here also we can't add or delete any property but here we can modify the property.
 let ob2={
    obName:"marker",
    price:50

 }
 console.log(ob2)
  
 Object.seal(ob2)


 delete ob2.price //we can't delete
 ob2.color="red" //we can't add
 ob2.price=100 // we can modify 

 console.log(ob2)

// 7.object.isSealed()
// it is used to check the object is sealed or not

console.log(Object.isSealed(ob2)) //true
console.log(Object.isSealed(emp)) //false

//8.object.assign()
 //it is used to combine two or more than two objects and will return one new object.

 let person={
    ename:"rohit",
    phno:9999
 }

 let address={
    city:"mumbai",
    country:"India"
 }

 let combinedOb= Object.assign({},person,address)
 console.log(combinedOb)
  
 console.log(address)
 console.log(person)

 //9.hasOwnProperty()
 // it is used to know the property is present or not

 console.log(address.hasOwnProperty("city"))
 console.log(address.hasOwnProperty("ename"))



