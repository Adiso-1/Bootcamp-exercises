const toDo = [];
let id = 0;
const addItem = (taskName) => {
    id++;
    toDo.push({id, taskName, isCompleted: false,})
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

addItem('Drink Coffee');
addItem('Learn NodeJS');
addItem('Good Morning');
addItem('Shower');
markAsDone(2);
markAsDone(1);
unMarkAsDone(2);
printList()