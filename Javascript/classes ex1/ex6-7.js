class Room {
    constructor(roomId,level,amount) {
        this.roomId = roomId;
        this.level = level;
        this.amount = amount;        
        this.isFree = true;
    }
    isAvailable(guests) {
        if (guests <= this.amount) {
            this.isFree = false;
            return true;
        }
        return false;
    }
    print() {
        console.log(`Room Id: ${this.roomId}, Level: ${this.level}, Amount: ${this.amount},Is Free: ${this.isFree}`);
    }
}
const room1 = new Room('1','1',3);
const room2 = new Room('2','2',2);
const room4 = new Room('4','7',2);
const room5 = new Room('5','7',4);

class Hotel {
	constructor(Room) {
		this.rooms = [Room];
	}
	addRoom(Room) {
		for (let i = 0; i < this.rooms.length; i++) {
			if (this.rooms[i].roomId === Room.roomId) {
				return false;
			}
		}
		this.rooms.push(Room);
		return true;
	}
	addNewRoom(roomId, level, amount) {
		const room = new Room(roomId, level, amount);
		this.addRoom(room);
	}
	removeRoom(roomId) {
		for (let i = 0; i < this.rooms.length; i++) {
			if (
				adiHotel.rooms[i].roomId === roomId.toString() &&
				adiHotel.rooms[i].isFree === true
			) {
				adiHotel.rooms.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	checkFreeRooms(amount) {
		return this.rooms.filter((el) => el.amount >= amount && el.isFree === true);
	}
	checkIn(roomId, amount) {
		for (let i = 0; i < this.rooms.length; i++) {
			if (
				this.rooms[i].roomId === roomId.toString() &&
				this.rooms[i].isFree &&
				this.rooms[i].amount >= amount
			) {
				this.rooms[i].isFree = false;
				return true;
			}
		}
		return false;
	}
	HighRoomFree() {
        let maxLevel = 1;
        this.rooms.forEach(room => {
            if (parseInt(room.level) > maxLevel) {
                maxLevel = room.level;
            }
        })
        const topFloor = this.rooms.filter(room => room.level === maxLevel)
        topFloor.sort((a,b) => a.amount - b.amount)
        return topFloor;
    }
    getAllRooms(isFree) {
        return this.rooms.filter(room => room.isFree === isFree)
    }
}
const adiHotel = new Hotel(room1);
adiHotel.addRoom(room2);
adiHotel.addRoom(room4);
adiHotel.addRoom(room5);
adiHotel.addNewRoom('3','3',5);
// adiHotel.removeRoom(2);
// console.log(adiHotel.checkFreeRooms(3));
// adiHotel.checkIn(1,4)
// console.log(adiHotel);
// console.log(adiHotel.HighRoomFree());
console.log(adiHotel.getAllRooms(false));
room4.isAvailable(2)
// console.log(adiHotel.rooms);
console.log(adiHotel.getAllRooms(false));