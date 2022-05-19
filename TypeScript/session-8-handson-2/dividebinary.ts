function getAbsolute(i) {
    return i >= 0 ? i : -i;
}
 
// Function to perform a division of two numbers using the binary search algorithm
function divide( x,  y)
{
    // handle divisibility by 0
    if (y == 0) {
        return 0;        // return 0
    }
 
    // Set range for result [low, high]. The `high` is set to INFINITY
    // to handle the case when `y < 1`, and `x < result < INF`
    double low = 0, high = 99999999999;
 
    // set accuracy of the result
    var precision = 0.001;
 
    // store sign of the result
    var sign = 1;
    if (x * y < 0) {
        sign = -1;
    }
 
    // make both input numbers positive
    x = getAbsolute(x);
    y = getAbsolute(y);
 
    while (1)
    {
        // calculate mid
        var mid = low + ((high - low)/2);
 
        // if `y×mid` is almost equal to `x`, return `mid`
        if (getAbsolute(y * mid - x) <= precision) {
            return mid * sign;
        }
 
        // if `y×mid` is less than `x`, update `low` to `mid`
        if (y * mid < x) {
            low = mid;
        }
        else {
            // if `y×mid` is more than `x`, update `high` to `mid`
            high = mid;
        }
    }
}
 
divide(22, 7);