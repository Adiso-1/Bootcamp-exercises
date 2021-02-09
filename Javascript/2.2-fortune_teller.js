function tellFortune(jobTitle,location,partnerName,numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`
};
let fortuneTeller = tellFortune('programmer','Tel-Aviv','Sapir',3);
console.log(fortuneTeller);