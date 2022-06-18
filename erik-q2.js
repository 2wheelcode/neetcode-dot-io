/* 
1-The first thing to do is arrange each color shirt list in ascending order
2-Then compare each value is > at the same index of each array, return T or F
3-If each index comparison is == (all True or all False), then "yes" photo can be taken, else, no picture
4-State which array is larger, assign/designate that array to the back row
 */

// First pair of height arrays
//const blue_shirts = [6, 9, 2, 4, 5];
//const red_shirts = [5, 8, 1, 3, 4];

// Second  pair of height arrays
const red_shirts = [6, 9, 2, 4, 5];
const blue_shirts = [5, 8, 1, 3, 4];

console.log("Blue unsorted: ", blue_shirts);
console.log("Red unsorted: ", red_shirts);

const blue = blue_shirts.sort((a, b) => a - b);
const red = red_shirts.sort((a, b) => a - b);
console.log("Blue sorted: ", blue);
console.log("Red sorted: ", red);

function compareHeight() {

    if(blue[0] > red[0]) {
        big = blue;
        small = red;
        color = "Blue"
       console.log("If=> Blue [0] > Red [0] :sets big & small, init comparison loop");
   } else {    
        big = red;
        small = blue;
        color = "Red"
       console.log(`Else=> Red [0] > Blue [0] :sets big & small, init comparison loop`);
   }

    for(i=0; i<big.length; i++) {
        if(big[i] === small[i]) {
            console.log(`Compare at index:[${i}]`, big[i],`>`, small[i], `=`, big[i] > small[i]);
            return "False, photo can not be taken";
        } else if (big[i] > small[i]) {
            console.log(`Compare at index:[${i}]`, big[i],`>`, small[i], `=`, big[i] > small[i]);
        } else {
            console.log(`Compare at index:[${i}]`, big[i],`>`, small[i], `=`, big[i] > small[i]);
            return "False, photo can not be taken";
        }
    }
    return `True, the photo can be taken with ${color} shirts in the back row`;
}
console.log(compareHeight());

/* let canPicBeTaken = function compareHeight() {
    const blue = blue_shirts.sort((a, b) => a - b);
    const red = red_shirts.sort((a, b) => a - b);
    console.log("Blue sorted: ", blue);
    console.log("Red sorted: ", red);

    for(i=0; i<blue.length; i++) 
        if(blue[i] === red[i]) return false;
        return (blue[i] > red[i])
             
}
console.log(canPicBeTaken.every(compareHeight(blue, [i]))); */