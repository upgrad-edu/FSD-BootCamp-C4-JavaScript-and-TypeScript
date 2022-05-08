function subStringCount(text:string,substring:string):number{
var count = text.split(substring).length - 1;
console.log(count);
return count;
}