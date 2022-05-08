function mergeUnique(numarray1:number[],numarray2:number[]):number[]{
const mergedArray = [...new Set([...numarray1,...numarray2])]
return mergedArray;
}