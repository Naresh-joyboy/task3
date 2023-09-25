const obj1 ={name:"mahesh",age:5};
const obj2 ={name:"mahesh",age:5};

const hasSameDataObj = function(obj1, obj2) {
    let obj1keys = Object.keys(obj1);
  
    if(obj1keys.length === Object.keys(obj2).length) {
       return obj1keys.every(key => obj2.hasOwnProperty(
           key) && obj2[key] === obj1[key]);
    };
    return false
};  
console.log(hasSameDataObj (obj1, obj2));