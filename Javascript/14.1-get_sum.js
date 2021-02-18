function getSum(arr1, arr2){
    // debugger
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum
}
console.log(getSum([1,2,3],[5,66,23]));

// ! problam -> arr1 = undefined, arr2 = undefined because of the comma
// 1. line 11
// 2. I used the debbuger after the function invoked
// 3. we need to put comma between different arrays.

// 1. line 2
// 3. sum is in constant variable and connot be changed

// 1. line 10
// 3. we need to put return sum
