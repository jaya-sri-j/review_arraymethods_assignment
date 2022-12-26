//1)Array.at()
var array = [5, 12, 8, 130, 44];
console.log(array.at(2));      
console.log(array.at(-2));

//2)array.concat()
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);

//3)array.push()
var x = [5, 12, 8, 130, 44];
x.push(23,36);
console.log(x);


//4)array.pop()
var x = [5, 12, 8, 130, 44];
console.log(x.pop());
console.log(x);


//5)array.shift
var x = [5, 12, 8, 130, 44];
console.log(x.shift());
console.log(x);

//6)array.unshift
var x = [5, 12, 8, 130, 44];
console.log(x.unshift(1,2));
console.log(x);

//7)array.splice()
var month=["jan","feb","mar","apr"];
console.log(month.splice(-2,0));
console.log(month);
//remove
var month=["jan","feb","mar","apr"];
month.splice(2,1);
console.log(month);
//replace
var month=["jan","feb","mar","apr"];
console.log(month.splice(1,1,"may"));
console.log(month);

//8)array.slice()
var month=["jan","feb","mar","apr","may"];
var x=month.slice(1,3);
console.log(x);
//negative
var month=["jan","feb","mar","apr","may"];
var x=month.slice(-4,-1);
console.log(x);

//9)array.reverse()
var a=[1,2,3,4,5];
a.reverse();
console.log(a);

//10)array.sort()
var a=[12,1,3,34,6,90,80,70];
a.sort();
console.log(a);

//11)array.includes()-
var a=[1,2,3,4,5];
var b=a.includes(4);
console.log(b);

//12)array.indexOf()
var a=[1,2,3,4,5];
var b=a.indexOf(6);
console.log(b);

//13)array.fill()
var sum=[1,2,3,4,5];
var a=sum.fill(4);
console.log(a);

var sum=[1,2,3,4,5];
var a=sum.fill(2,0,3);
console.log(a);

var sum=[1,2,3,4,5];
var a=sum.fill(2,3);
console.log(a);

//14)array.map()
var a=[0,3,4,5,3];
var res=a.map(function(val,index)
{
	return val*2;
});
console.log("res",res);

//15)array.filter()
var arr=[0,3,4,5,3];
var res=arr.filter(function(val,index)
{
	return val>4;
});
console.log("res",res);

//16)array.every()
var a=[0,3,4,5,3];
var res=a.every(function(val,index)
{
	return val>4;
});
console.log("res",res);

//17)array.some()
var a=[0,3,4,5,3];
var res=a.some(function(val,index)
{
	return val>4;
});
console.log("res",res);

//18)array.find()
var a=[0,3,4,5,3];
var res=a.find(function(val,index)
{
	return val>3;
});
console.log("res",res);


//19)array.reduce()
var a=[0,3,4,5,3];
var res=a.reduce(function(acc,c)
{
	return acc+c;
});
console.log("res",res);

//20)array.forEach()
var array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

//21)array.entries()
var arr = ['a', 'b', 'c'];
var x= arr.entries();
console.log(x.next().value);
console.log(x.next().value);

//22)array.findIndex()
var array1 = [5, 12, 8, 130, 44];
var isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

//23)array.findLast()
var array1 = [5, 12, 50, 130, 44];
var foundlastno = array1.findLast((element) => element > 45);
console.log(foundlastno);

//24)array.findLastIndex()
var array1 = [5, 12, 50, 130, 44];
var isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));

//25)array.flat()
var arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
var arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(1));

//26)array.join()
var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));


