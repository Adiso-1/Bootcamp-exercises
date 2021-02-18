function countOccurrences (str, char){
    // debugger
    let counter = 0 ;
    for (let is= 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
            counter += 1 ;
            }
        }
    return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));

// first I put console.log and the debbuger after the function

// 1. line 6
// 2. debugger 
// 3. I saw that the counter doesn't increase by 1, and then find the problam. --> counter += 1