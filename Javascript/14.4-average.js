function calcAverage (arr){
    debugger
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
        sum += arr [ i ];
    }
    return sum ;
}
console.log(calcAverage ([ 85 , 90 , 92 ]));

// first i put console.log to see the return from the function - so i put the dubbuger in the return function

// 1. line 3.
// 2. dubbuger in line 2.
// 3.  I see that var is undefined, we can't increment undefined number.
