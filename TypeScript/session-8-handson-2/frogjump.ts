function solution(X, A) {
    let times = {}
    
    for (var second = 0; second < A.length; second++) {
        var position = A[second]
        if (position > X) continue;
        if (times[position] === undefined || times[position] > second) {
            times[position] = second
        }
    }
    
    let maxTime = 0
    for (var i = 1; i < X + 1; i++) {
        if (times[i] === undefined) {
            return -1;
        } else if (maxTime < times[i]) {
            maxTime = times[i]
        }
    }
    
    return maxTime;
}