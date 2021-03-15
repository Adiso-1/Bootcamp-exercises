const toDo = [];
let id = 0;
const addItem = (taskName) => {
    id++;
    toDo.push({id, taskName, isCompleted: false,})
    return {id, taskName, isCompleted: false };
}
const deleteItem = (id) => {
    toDo.forEach((el,i) => {
        el.id === id ? toDo.splice(i,1) : null;
    })
}
const markAsDone = (id) => {
    toDo.forEach(el => {
        if (el.id === id) {
            el.isCompleted = true;
        }
        return toDo;
    })
}
const unMarkAsDone = (id) => {
    toDo.forEach((el) => {
        if (el.id === id) {
            el.isCompleted = false;
        }
    });
}
const printList = () => {
    toDo.sort((a,b) => a.isCompleted - b.isCompleted);
    console.log(toDo);
}
// console.log(toDo); 
addItem('Drink Coffee');
// console.log(toDo); 
addItem('Learn NodeJS');
deleteItem(1)
// addItem('Good Morning');
// addItem('Shower');
// markAsDone(2);
// markAsDone(1);
// unMarkAsDone(2);
printList()
module.exports = { id,addItem, deleteItem, markAsDone, unMarkAsDone, printList };