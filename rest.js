//import { movies } from "./storage.js";//destructur
//import {abc} from "./storage.js";
// import any from "./storage.js";
//console.log(movies);
//abc();
//any();

// let obj={
//     name: "thala",
//     alsoknownas :"msd",
//     role:"wk",
//     team:"csk",
// };

// let {team,...subObj}=obj;
// console.log(team);
// console.log(subObj);

// let mobiles=["iphone 13","iphone 14","iphone 15"]

// let [x,...subMobiles]=mobiles
// console.log(x);
// console.log(subMobiles);

// let colour =["black","blue","pink","red"]
// let[a,...subColour]=colours
// console.log(a);
// console.log(subColour);



function abc(a,...para){
    console.log(a);
    console.log(para);
}
abc(10,20,30,40,50);

