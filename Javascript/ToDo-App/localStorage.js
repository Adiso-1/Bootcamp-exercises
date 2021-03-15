//! local Storage
//* stores the data locally to the browser, will be persistent upon refresh and also if you close the browser itself
//* Each domain and browser gets its own local storage
//* Max 5 mb
//* It is not asynchronous
//* Gives us a storage object
//* It only accepts strings
//* key value pairs stored in the browser

//*localStorage.setItem(key,value)
localStorage.setItem("name", "Pini");
//turns primitive data types to strings
localStorage.setItem("age", true);

//*localSotrage.removeItem(key)
localStorage.removeItem("name");

//*localStorage.getItem(key)
const x = localStorage.getItem("name");
console.log(x);

//*localStorage.key(index)
//Great when you are doing a for loop and getting all the keys with this method.
const y = localStorage.key(0);
console.log(y);

//* localStorage.clear()
// localStorage.clear();
//! problem! My keys are getting overrided. Can only have one unique key in my localStorage
localStorage.setItem("name", "Timmy");

//! Wrong solution to try to embbed an array or object to my local storage
const names = ["pini", "timmy", "martha"];
const myObj = { name: "pini" };
// localStorage.setItem("names", names);
// localStorage.setItem("myObj", myObj);

//! Right solution. Stringify them and when you want them to your js world parse them.
localStorage.setItem("names", JSON.stringify(names));
localStorage.setItem("myObj", JSON.stringify(myObj));
const namess = JSON.parse(localStorage.getItem("names"));
const myObjj = JSON.parse(localStorage.getItem("myObj"));
console.log(myObjj);
