const arry = [1, 2, 1, 3, 4, 3, 5];
function toFindDuplicates (arry:any[]):any[]{
  const duplicates:any[] = arry.filter((item, index) => arry.indexOf(item) !== index)
return duplicates;
}