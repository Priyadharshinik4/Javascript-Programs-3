// //1.   Array Creation and Initialization

let arr1=[1,2,3,4,5];
console.log("CREATION AND INITIALIZATION");
console.log(arr1);


// //2.   Array Manipulation

let arr2=[10,20,30,40,50];
arr2.push("60");
console.log("PUSH");
console.log(arr2);
arr2.pop();
console.log("POP");
console.log(arr2);
console.log("UNSHIFT");
arr2.unshift("70");
console.log(arr2);
arr2.shift();
console.log("SHIFT");
console.log(arr2);


// //3.   Array Searching

let arr3=[10,20,30,40,50];
console.log("SEARCHING");
console.log(arr3.indexOf(30));
console.log("FIND");
console.log(arr3.find((x)=>x==10));
console.log(arr3.findIndex((x)=>x==10));
console.log("INCLUDES");
console.log(arr3.includes(30));
console.log(arr3.includes(3));


// //6.   Array Sorting

let arr4=[10,20,30,40,50,10,30];
console.log("SORTING");
console.log(arr4.sort());
console.log("REVERSE");
console.log(arr4.reverse());


// //7.  Array Joining and Spliting


let arr5=[10,20,30,40,50];
console.log("JOINING"); 
let a=arr5.join(" < ");
console.log(a);
console.log("SPLITING");
console.log(a.split(" "));


//17.  Array Deduplication


let arr6=[10,30,20,50,40,80,60,50,30,90];
console.log("DEDUPLICATION");
console.log(arr6);
let newarr=[];
for(let i=0;i<arr6.length;i++){
    for(let j=0;i<arr6.length;j++)
    {
        if(arr6[i]==arr6[j])
        {
            newarr=arr6[j];
            j--;
        }
    }
}
console.log(newarr);

