// JavaScript code for k largest
// elements in an array
 
function kLargest(arr, n, k)
{
    // Sort the given array arr in reverse
    // order.
    arr.sort((a, b) => b - a);
 
    // Print the first kth largest elements
    for (let i = 0; i < k; i++)
        document.write(arr[i] + " ");
}
 
// driver program
    let arr = [ 1, 23, 12, 9, 30, 2, 50 ];
    let n = arr.length;
    let k = 3;
    kLargest(arr, n, k);
 
 