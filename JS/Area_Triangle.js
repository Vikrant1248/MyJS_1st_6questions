let firstside = 5; 
let secondside = 6; 
let thirdside = 7; 
let p = (firstside + secondside + thirdside)/2;
let area =  Math.sqrt(p*((p-firstside)*(p-secondside)*(p-thirdside)));
console.log(area);
console.log('area =', area)