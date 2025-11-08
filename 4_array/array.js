let arr=[10,"html",true,[3,4]]
console.log(arr)

//how to know the length of the array

console.log(arr.length)

//array methods
//1.push()

// it isn used to add element at the end of the array and return size of the array

let arr1=[10,20,30]
console.log(arr1)
arr1.push(40)
console.log(arr1)

//2.pop()
 
//it is used to remove the last element from the array and return removed element
let arr2=[10,20,30]

arr2.pop()
console.log(arr2)

//3.unshif() 
 
//this method is used to add the element at the starting of the array and return the size of the array
let arr3=[10,20,30]
arr3.unshift(5)
console.log(arr3)

//4.shif()
// this method is used to remove  the element from the starting of the array and return removed element
let arr4=[10,20,30]
arr4.shift()
console.log(arr4)

//5.includes

// it is used to know the given element is present or not.if the element is present in the array it will return true else it will return false
let arr5=[10,20,30,40]
console.log(arr5.includes(20))
console.log(arr5.includes(200))

//6.indexOf()

console.log(arr5.indexOf(30))


//7.lastIndexOf()

console.log(arr5.lastIndexOf(30))

//8.concat()

let sub1=["html","css"]
let sub2=["java","python"]
console.log(sub1.concat(sub2))


//9.reverse()
//it is used to reverse the array
let  arr6=[10,20,30,40,50]

arr6.reverse()

console.log(arr6)

//10.join()
//it is used to convert any array into string

let msg=['h','e','l','l','o']
console.log(msg.join(""))


let str="hello"
let int=str.split("");
    console.log(int);

//higherorder array

// 1.map()
//  map() method higherorder array method it is used to traverse the array and we can do any operation with all the elements.

//map() will take one callback function and here it can take 3 parameters(element,index,array) 

// this method will return one new array.

let numbers=[10,20,30,40,50]
 


let m2=numbers.map((ele,index,array)=>{
    return  ele+100
})
console.log(m2)

let subjects=['html','css','js','java','python']
// ['HTML','CSS','JS'.'JAVA','PYTHON']

let s2=subjects.map((ele)=>{
     return ele.toUpperCase()
})
console.log(s2)

// 2.filter()

// it is one higherorder array method it is used to  traverse the array and check the condition and it will return one new array.

//filter() will take one callback function and here it can take 3 parameters(element,index,array) 


let f= numbers.filter((ele)=>{
    return ele>30
 })
 console.log(f)

 let g=numbers.filter((ele)=>{
    return ele !=30

 })
 console.log(g)

//  3.reduce()

// it is used to reduce the array elements into single value by adding or multiplying.

// it is one higher order array method it will take 4 parameters in the callback function (acc,ele,index,array)

let sum=numbers.reduce((acc,ele)=>{

    return acc+ele//*

})
console.log(sum)

let multiply=numbers.reduce((acc, ele)=>{
    return acc*ele
},1)
console.log(multiply)

// 4.sort()

// sor() is higherorder array method it is used to sort the array into ascending or descending order

// it takes two parameters in the callback function if we are giving firstParameter-secondParanmeter
//  it will give ascending order and for opposite one it will give descending order

let arr8=[5,3,2,6,1,8]

let asc=arr8.sort((s,m)=>{
    return s-m

})
console.log(asc)

let dsc=asc.sort((s,m)=>{
    return m-s
})
console.log(dsc)

// 5.forEach()

//this method can't return.


let arr9=[2,6,8,10]

let x=arr9.forEach((ele)=>{
    
    console.log(ele+100)
})

console.log(x)

let arr10=[100,200,300,400,500]

console.log(arr10.splice(2,2,600))













