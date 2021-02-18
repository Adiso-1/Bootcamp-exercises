function humanReadable(seconds) {
  let array = [];
  if (Math.floor(seconds / 3600) > 0) {
    array.push(Math.floor(seconds / 3600).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }))
  seconds -= Math.floor(seconds / 3600) * 3600;
  } else {
    array.push('00')
  }
  console.log(seconds);
  if (Math.floor(seconds / 60) > 0) {
    array.push(
      Math.floor(seconds / 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
    seconds -= Math.floor(seconds / 60) * 60;
  } else {
    array.push("00");
  }
  console.log(seconds);
  if (seconds < 60) {
    array.push(
      Math.floor(seconds).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
  } else {
    array.push("00");
  }
  return array.join(":");
}
console.log(humanReadable(359999));



// [17, 7.5, -7.2345].forEach((myNumber) => {
//   let formattedNumber = myNumber.toLocaleString("en-US", {
//     minimumIntegerDigits: 2,
//     useGrouping: false,
//   });
//   console.log("Input:    " + myNumber + "\n" + "Output:   " + formattedNumber);
// });