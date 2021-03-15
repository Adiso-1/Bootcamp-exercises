const { expect } = require('@jest/globals')
const array = require('./index')
test('add item to list', () => {
    expect(array.addItem('Eat Dinner')).toEqual({id: array.id+=1, taskName: 'Eat Dinner', isCompleted: false,})
})    

test('delete id from list', () => {
    let list = [
			{ id: 1, taskName: 'Drink Coffee', isCompleted: false },
			{ id: 2, taskName: 'Learn NodeJS', isCompleted: false },
    ];
    expect(array.deleteItem(2).expect(list.pop()))
})